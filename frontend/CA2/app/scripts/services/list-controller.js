'use strict';

/**
 * @ngdoc service
 * @name inspiracode.baseControllers.listController
 * @description
 * # listController
 * Factory in the inspiracode.baseControllers.
 */
angular.module('ca2App').factory('listController', function($log, $q, localStorageService, $location) {

    var log = $log;

    return function(oMainConfig) {

        var listCtrl = this;

        //INIT CONFIG/////////////////////////////////////
        var scope = oMainConfig.scope;

        var _baseService = oMainConfig.baseService;
        if (!oMainConfig.entityName || oMainConfig.entityName == '') {
            oMainConfig.entityName = '';
        }

        //After Load callback
        var _afterLoadCallBack = oMainConfig.afterLoad;
        if (!_afterLoadCallBack || typeof _afterLoadCallBack != 'function') {
            _afterLoadCallBack = function() {};
        }

        //After create entity callback
        var _afterCreateCallBack = oMainConfig.afterCreate;
        if (!_afterCreateCallBack || typeof _afterCreateCallBack != 'function') {
            _afterCreateCallBack = function() {};
        }

        //On Open entity callback
        var _onOpenCallBack = oMainConfig.onOpenItem;
        if (!_onOpenCallBack || typeof _onOpenCallBack != 'function') {
            _onOpenCallBack = function() {};
        }

        //On After remove item callback
        var _onAfterRemove = oMainConfig.afterRemove;
        if (!_onAfterRemove || typeof _onAfterRemove != 'function') {
            _onAfterRemove = function() {};
        }




        var _filterStorageName = _baseService.entityName + $location.path();
        var _filters = oMainConfig.filters || {};
        var _perPage = oMainConfig.perPage || 10;

        var _paginate = oMainConfig.paginate !== undefined ? oMainConfig.paginate : true;
        //END CONFIG/////////////////////////////////////


        //scope---------------------------------------------
        //let's use normal variables (without underscore) so they can be
        //accessed in view normally
        scope.isLoading = true;
        scope.removeItem = function(oEntity) {
            alertify.confirm(
                'Do you really want to delete a: ' + oMainConfig.entityName + '?',
                function() {
                    scope.$apply(function() {
                        _baseService.removeEntity(oEntity, scope.baseList).then(function(data) {
                            _updateList().then(function(){
                                _onAfterRemove();
                            });
                        }, function() {});
                    });
                });
        };
        scope.openItem = function(oEntity) {
            var theArguments = Array.prototype.slice.call(arguments);
            _onOpenCallBack.apply(listCtrl, theArguments);
        };
        scope.take = function(objToTake, toUser) {
            _baseService.take(objToTake, toUser).then(function(data) {
                objToTake.assignedTo = toUser.Value;
                objToTake.AssignationMade = false;
            });
        };
        scope.checkItem = function(bSelected) {
            bSelected ? ++scope.selectedCount : --scope.selectedCount;
        };
        scope.deleteSelected = function() {
            if (scope.selectedCount > 0) {
                alertify.confirm(
                    'Do you really want to remove all selected items?',
                    function() {
                        scope.$apply(function() {
                            _baseService.removeSelected(scope.baseList).then(function(data) {
                                _updateList().then(function(){
                                    _onAfterRemove();
                                });
                            });
                        });
                    });
            }
        };
        scope.create = function() {
            var theArguments = Array.prototype.slice.call(arguments);
            _baseService.createEntity().then(function(oNewEntity) {
                theArguments.unshift(oNewEntity);
                _afterCreateCallBack.apply(listCtrl, theArguments);
                // _baseService.save(oNewEntity).then(function(data) {
                //     var theCreatedEntity = angular.copy(data);
                //     scope.baseList.push(theCreatedEntity);
                // });

            });
        };

        scope.pageChanged = function(newPage) {
            scope.filterOptions.page = newPage;
            _updateList();
        };

        //Updating items:*******************************
        scope.addQty = 1;
        scope.addItems = function(addQty) {
            _baseService.addBatch(addQty, scope.baseList).then(function(data) {
                scope.selectedCount = scope.getSelectedCount();
            });
        };
        scope.saveItem = function(oItem) {
            return _baseService.save(oItem).then(function(data) {
                scope.selectedCount = scope.getSelectedCount();
                return data;
            });
        };
        var _saveChildren = function() {
            var arrPromiseConstructors = [];
            angular.forEach(_baseService._childrenResources, function(childCtrl) {
                var promiseConstructor = function() {
                    return childCtrl.save(childCtrl);
                }
                arrPromiseConstructors.push(angular.copy(promiseConstructor));
            });

            return $q.serial(arrPromiseConstructors);
        };
        listCtrl.save = function() {
            var deferred = $q.defer();

            _saveChildren().then(function() {
                if (scope.baseList.editMode) {
                    _baseService.updateBatch(scope.baseList).then(function(data) {
                        deferred.resolve();
                    }, function() {
                        deferred.reject();
                    });
                } else {
                    deferred.resolve();
                }
            });

            return deferred.promise;
        };
        scope.on_input_change = function(oItem) {
            oItem.editMode = true;
        };
        scope.undoItem = function(oItem) {
            var originalItem = _baseService.getById(oItem.id);
            angular.copy(originalItem, oItem);
        };
        scope.refresh = function() {
            if (!scope.filterOptions || scope.filterOptions.perPage == undefined) {
                scope.clearFilters();
            } else {
                _updateList();
            }
        };
        //end scope----------------------------------------

        scope.getSelectedCount = function() {
            var result = 0;
            var arrItems = scope.baseList || [];
            arrItems.forEach(function(oEntity) {
                if (oEntity.checked) {
                    result++;
                }
            });
            return result;
        };

        //todo unselectAll and filters should be done in listcontroller
        scope.unselectAll = function() {
            var arrItems = scope.baseList || [];
            arrItems.forEach(function(oEntity) {
                oEntity.checked = false;
            });
            scope.selectedCount = 0;
        };

        scope.selectAll = function() {
            var arrItems = scope.baseList || [];
            arrItems.forEach(function(oEntity) {
                oEntity.checked = true;
            });
            scope.selectedCount = arrItems.length;
        };

        var _getSelected = function() {
            var arrItems = scope.baseList || [];
            return arrItems.filter(function(oEntity) {
                return oEntity.checked;
            });
        };

        var _afterLoad = function() {
            _afterLoadCallBack(scope.baseList);
            scope.selectedCount = scope.getSelectedCount();
        };

        var _staticQParams = '';
        listCtrl.load = function(qParams) {
            _staticQParams = qParams;
            scope.isLoading = true;
            alertify.closeAll();
            return _baseService.loadDependencies().then(function(data) {
                _setFilterOptions();
                _fillCatalogs();
                return _updateList();

                // scope.$evalAsync(function() {
                // });
            });
        };


        var _loadByParentKey = function(parentType, parentKey) {
            alertify.closeAll();

            return _baseService.loadDependencies().then(function(data) {
                _setFilterOptionsByParent(parentType, parentKey);
                _fillCatalogs();
                return _updateList();

                // scope.$evalAsync(function() {
                // });
            });
        };

        var _fillCatalogs = function() {
            //for filters:
            for (var prop in _filters) {
                if (_filters.hasOwnProperty(prop)) {

                    var theCatalog = 'the' + capitalizeFirstLetter(_filters[prop]);
                    if (theCatalog.slice(-1) != 's') {
                        theCatalog += 's';
                    }
                    if (_baseService.catalogs[_filters[prop]]) {
                        scope[theCatalog] = _baseService.catalogs[_filters[prop]].getAll();
                        if (scope[theCatalog].length > 0) {
                            if (scope[theCatalog][0].Value != 'All') {
                                scope[theCatalog].unshift({
                                    id: null,
                                    Value: 'All'
                                });
                            }
                        }
                    }
                }
            }

        };

        function capitalizeFirstLetter(sWord) {
            var result = sWord.charAt(0).toUpperCase() + sWord.slice(1).toLowerCase();
            return result;
        }

        var _setFilterOptions = function() {

            scope.filterOptions = localStorageService.get(_filterStorageName);

            if (!scope.filterOptions) {
                scope.clearFilters();
            } else {
                scope.filterOptions = JSON.parse(scope.filterOptions);
            }

        };

        var _setFilterOptionsByParent = function(parentType, parentKey) {
            _setFilterOptions();
            scope.filterOptions.parentField = parentType + 'Key';
            scope.filterOptions.parentKey = parentKey;
        };

        var _persistFilter = function() {
            localStorageService.set(_filterStorageName, JSON.stringify(scope.filterOptions));
        };

        var _makeQueryParameters = function() {
            var result = '?';

            for (var prop in scope.filterOptions) {
                if (scope.filterOptions.hasOwnProperty(prop)) {
                    result += prop + '=' + scope.filterOptions[prop] + '&';
                }
            }

            result += _staticQParams || '';

            return result;
        };

        var _updateList = function() {
            scope.isLoading = true;

            var perPage = scope.filterOptions.perPage;
            var page = scope.filterOptions.page;

            if (!_paginate) {
                page = 1;
                perPage = 0;
                scope.filterOptions.page = 1;
                scope.filterOptions.perPage = 0;
            }

            var queryParameters = _makeQueryParameters();

            return _baseService.getFilteredPage(perPage, page, queryParameters).then(function(data) {
                scope.baseList = data.Result;

                scope.filterOptions.itemsCount = data.AdditionalData.total_filtered_items;
                scope.filterOptions.totalItems = data.AdditionalData.total_items;
                _persistFilter();

                for (var i = 0; i < scope.baseList.length; i++) {
                    var current = scope.baseList[i];
                    current.itemIndex = (scope.filterOptions.page - 1) * scope.filterOptions.perPage + i + 1;
                }
                _afterLoad();
                scope.isLoading = false;
            });

        };

        scope.clearFilters = function() {
            scope.filterOptions = {
                perPage: _perPage,
                page: 1,
                itemsCount: 0,
                filterUser: null
            };

            for (var prop in _filters) {
                if (_filters.hasOwnProperty(prop)) {
                    scope.filterOptions[prop] = null;
                }
            }

            _persistFilter();
            // _updateList();
        };

        listCtrl.go = function(path) {
            if (path != $location.url()) {
                $location.url(path);
                // $window.open('#!' + path, '_blank');
            }
        };

        // _baseService._childrenResources = [];
        // listCtrl.addChildrenCtrl = function(childrenCtrl, id) {
        //     var oFound = _baseService._childrenResources.find(function(c) {
        //         return c.id == id;
        //     });
        //     if (!oFound) {
        //         childrenCtrl.id = id;
        //         _baseService._childrenResources.push(childrenCtrl);
        //     }
        // };

        // // Public baseController API:////////////////////////////////////////////////////////////
        // var oAPI = {
        //     load: _load,
        //     loadByParentKey: _loadByParentKey,
        //     getSelected: _getSelected
        // };
        // return oAPI;
    };
});
