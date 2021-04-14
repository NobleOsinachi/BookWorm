using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookWorm.Models;

namespace BookWorm.Data
{
    public class DbInitializer
    {
        public DbInitializer()
        {

        }
        private readonly BookWormContext context;
      
        public DbInitializer(BookWormContext context)
        {
            this.context = context;

        }
        public void Seed( )
        {


            new List<Employee>{
                new Employee() { Name = "IT" },
                new Employee() { Name = "Finance" },
                new Employee() { Name = "Support" },
                new Employee() { Name = "HR" },
            }.ForEach(d => this.context.Add(d));
            context.SaveChanges();

            Console.WriteLine("Data seeded successfully");
        }

    }
}
