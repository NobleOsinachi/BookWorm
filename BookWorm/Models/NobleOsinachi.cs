using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Collections;
using System.Linq.Expressions;
using System.Threading;
using static System.Net.WebRequestMethods;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookWorm.Models
{
    public class HomeController
    {
        public HomeController()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }


        public bool IsActive { get; set; }

        public object AsyncState { get; set; }
        public bool CompletedSynchronously { get; set; }
        public bool IsCompleted { get; set; }
        public WaitHandle AsyncWaitHandle { get; set; }

        public Type ElementType { get; set; }
        public Expression Expression { get; set; }
        public IQueryProvider Provider { get; set; }
         
    }
}
