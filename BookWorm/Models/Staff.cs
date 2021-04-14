using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookWorm.Models
{
    public class Staff //: Employee
    {
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public int Id { get; set; }public int EmployeeId { get; set; }public Employee Employee { get; set; }

        public bool IsActive{ get; set; }
    }
}