using BusinessSpecificLogic.EF;
using System.Web.Http;
using BusinessSpecificLogic.Logic;

namespace ReusableWebAPI.Controllers
{
    [RoutePrefix("api/Email")]
    public class EmailController : DocumentController<Email>
    {
        public EmailController(IEmailLogic logic) : base(logic)
        {
        }
    }
}
