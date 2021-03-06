'use strict';

/**
 * @ngdoc service
 * @name ca2App.userService
 * @description
 * # userService
 * Service in the ca2App.
 */

angular.module('ca2App').service('utilsService', function($filter) {

    var service = {};

    service.toJavascriptDate = function(sISO_8601_Date) {
        return sISO_8601_Date ? moment(sISO_8601_Date, moment.ISO_8601).toDate() : null;
    };

    service.toServerDate = function(oDate) {
        var momentDate = moment(oDate);
        if (momentDate.isValid()) {
            momentDate.local();
            return momentDate.format();
        }
        return null;
    };

    service.toImageBase64 = function(imageString) {
        var result = '';
        if (imageString.length > 0) {
            result = 'data:image/bmp;base64,' + imageString;
        }
        return result;
    };

    return service;

}).service('userService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'User',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {
            theEntity.Identicon = '';
            theEntity.Identicon64 = '';
        },

        dependencies: [

        ]
    });

    crudInstance.getByUserName = function(sUserName) {
        var _arrAllRecords = crudInstance.getAll();
        for (var i = 0; i < _arrAllRecords.length; i++) {
            if (_arrAllRecords[i].UserName == sUserName) {
                return _arrAllRecords[i];
            }
        }
        return {
            id: -1,
            Value: ''
        };
    };

    crudInstance.getUsersInRoles = function(arrRoles) {
        var _arrAllRecords = crudInstance.getAll();
        var result = [];
        for (var i = 0; i < _arrAllRecords.length; i++) {
            if (arrRoles.indexOf(_arrAllRecords[i].Role) > -1) {
                result.push(_arrAllRecords[i]);
            }
        }
        result.push(_arrAllRecords[0]);
        return result;
    };


    crudInstance.sendTestEmail = function(oUser) {
        return crudInstance.customPost('SendTestEmail', oUser);
    };

    return crudInstance;
}).service('trackService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'Track',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {

        },

        dependencies: [

        ]
    });

    crudInstance.assignResponsible = function(iTrackKey, iUserKey) {
        return crudInstance.customPost('AssignResponsible/' + iTrackKey + '/' + iUserKey);
    };

    return crudInstance;
}).service('EmailService', function(crudFactory) {

    var crudInstance = new crudFactory({

        entityName: 'Email',

        catalogs: [],

        adapter: function(theEntity) {

            theEntity.SelectedToRecipients = [];
            if (theEntity.Destinataries) {
                theEntity.SelectedToRecipients = JSON.parse(theEntity.Destinataries);
            }

            theEntity.SelectedCcRecipients = [];
            if (theEntity.Cc) {
                theEntity.SelectedCcRecipients = JSON.parse(theEntity.Cc);
            }

            theEntity.SelectedBccRecipients = [];
            if (theEntity.Bcc) {
                theEntity.SelectedBccRecipients = JSON.parse(theEntity.Bcc);
            }

            return theEntity;
        },

        adapterIn: function(theEntity) {

        },

        adapterOut: function(theEntity, self) {
            theEntity.Destinataries = JSON.stringify(theEntity.SelectedToRecipients);
            theEntity.Cc = JSON.stringify(theEntity.SelectedCcRecipients);
            theEntity.Bcc = JSON.stringify(theEntity.SelectedBccRecipients);
        },

        dependencies: [

        ]
    });

    return crudInstance;
});
