using BusinessSpecificLogic.EF;
using Reusable;
using Reusable.Attachments;
using Reusable.Email;
using System;
using System.Configuration;
using System.Data.Entity;

namespace BusinessSpecificLogic.Logic
{
    public interface IEmailLogic : IDocumentLogic<Email>
    {
    }

    public class EmailLogic : DocumentLogic<Email>, IEmailLogic
    {
        public EmailLogic(DbContext context, IDocumentRepository<Email> repository, LoggedUser LoggedUser) : base(context, repository, LoggedUser)
        {
        }

        protected override void AdapterOut(params Email[] entities)
        {
            foreach (var item in entities)
            {
                item.Attachments = AttachmentsIO.getAttachmentsFromFolder(item.AttachmentsFolder, "EmailAttachments");
            }
        }

        protected override void onBeforeSaving(Email entity, BaseEntity parent = null, OPERATION_MODE mode = OPERATION_MODE.NONE)
        {
            var ctx = context as WwwContext;


            if (mode == OPERATION_MODE.ADD)
            {
                //Validations:===============================================================================================
                #region Validations

                entity.CreatedAt = DateTimeOffset.Now;

                //if (entity.to?.Count == 0 && entity.cc?.Count == 0 && entity.bcc?.Count == 0)
                //{
                //    throw new KnownError("Cannot send email without Recipients.");
                //}

                #endregion



                #region Send Email

                //Copy Attachments when Is Re-send:==========================================================================
                if (entity.IsResend)
                {
                    if (!string.IsNullOrWhiteSpace(entity.AttachmentsFolder))
                    {
                        if (entity.Attachments != null && entity.Attachments.Count > 0)
                        {
                            string baseAttachmentsPath = ConfigurationManager.AppSettings["EmailAttachments"];

                            string sourceAttachmentsPath = baseAttachmentsPath + entity.AttachmentsFolder;
                            string targetAttachmentsPath = baseAttachmentsPath;
                            entity.AttachmentsFolder = AttachmentsIO.CreateFolder(targetAttachmentsPath);
                            targetAttachmentsPath += entity.AttachmentsFolder;
                            AttachmentsIO.DirectoryCopyStreams(sourceAttachmentsPath, targetAttachmentsPath, false);

                            foreach (var file in entity.Attachments)
                            {
                                if (file.ToDelete)
                                {
                                    string filePath = targetAttachmentsPath + "\\" + file.FileName;
                                    AttachmentsIO.DeleteFile(filePath);
                                }
                            }
                        }
                    }
                }

                string senderEmailAddress = ConfigurationManager.AppSettings["SMTP User"];
                string senderEmailPassword = ConfigurationManager.AppSettings["SMTP Password"];

                EmailService emailService = new EmailService("secure.emailsrvr.com", 587)
                {
                    EmailAddress = senderEmailAddress,
                    Password = senderEmailPassword,
                    From = senderEmailAddress,
                    Subject = entity.Subject,
                    Body = entity.Body,
                    AttachmentsFolder = entity.AttachmentsFolder
                };

                if (entity.to != null)
                {
                    foreach (var item in entity.to)
                    {
                        emailService.To.Add(item.Email);
                    }
                }

                if (entity.cc != null)
                {
                    foreach (var item in entity.cc)
                    {
                        emailService.Cc.Add(item.Email);
                    }
                }

                if (entity.bcc != null)
                {
                    foreach (var item in entity.bcc)
                    {
                        emailService.Bcc.Add(item.Email);
                    }
                }

                emailService.Bcc.Add(senderEmailAddress); //Add sender as recipient as well.


                try
                {
                    emailService.SendMail();
                }
                catch (Exception ex)
                {
                    throw new KnownError("Could not send email, please verify your SMTP settings.\n" + ex.Message);
                }

                #endregion
            }

        }
    }
}