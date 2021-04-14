using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookWorm.Models
{
    public class User
    {
        [Required]
        public int Id { get; set; }
        public int StaffId{ get; set; }
        public Staff Staff{ get; set; }
    }
}
