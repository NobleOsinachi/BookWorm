using System;
using System.Linq;
using BookWorm.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace BookWorm.Data
{
    public class BookWormContext : IdentityDbContext
    {
        private readonly IConfigurationRoot _config;
        public BookWormContext() : base() { }

        public BookWormContext(DbContextOptions<BookWormContext> options)
            : base(options) { }

        public BookWormContext(IConfigurationRoot config, DbContextOptions<BookWormContext> options)
            : base(options)
        {
            _config = config;
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(_config["ConnectionStrings:DefaultConnection"]);
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Customer>().Property<Guid>("Id").HasDefaultValue(Guid.NewGuid());
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Pin> Pins { get; set; }
        public DbSet<Staff> Staffs { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }
        

        

        public static BookWormContext Create()
        {
            return new BookWormContext();
        }

       

    }
}