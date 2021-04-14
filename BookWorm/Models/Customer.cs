using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookWorm.Models
{
    public class Customer
    {
        public Customer()
        {
          //  Id = Guid.NewGuid();
            Status = 1;
        }
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; /*private*/ set; }
        public string Name { get; set; }
        public int Status { get; set; }
        public ICollection<Pin> Pins { get; set; }
    }
}