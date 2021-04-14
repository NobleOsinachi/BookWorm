using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookWorm.Models
{
    public class Pin
    {
        public Pin()
        {
            Id = Guid.NewGuid();
            Name = "Noble";
            DateCreated = DateTime.Now;
        }
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime DateCreated { get; set; }
        public Customer Customer { get; set; }

        
    }
}