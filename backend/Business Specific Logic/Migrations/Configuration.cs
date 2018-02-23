namespace BusinessSpecificLogic.Migrations
{
    using BusinessSpecificLogic.EF;
    using Reusable.Workflows;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<WwwContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(WwwContext context)
        {
            #region Workflows

            #endregion
        }
    }
}