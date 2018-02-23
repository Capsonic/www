using BusinessSpecificLogic.EF;
using Reusable;
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
    }
}