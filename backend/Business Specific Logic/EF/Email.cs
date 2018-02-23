using Reusable;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessSpecificLogic.EF
{
    [Table("Email")]
    public class Email : BaseDocument
    {
        public Email()
        {
            ///Start:Generated:Constructor<<<
			sys_active = true;
			///End:Generated:Constructor<<<

            
        }

        [Key]
        public int EmailKey { get; set; }

        public override int id { get { return EmailKey; } set { EmailKey = value; } }

        ///Start:Generated:Properties<<<
        ///End:Generated:Properties<<<
    }
}
