using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookWorm.Data;
using BookWorm.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookWorm.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly BookWormContext _context;

        public EmployeesController(BookWormContext context)
        {
            _context = context;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            // AddNewDepartment(); Random rng = new Random(); string[] names = new string[] { "Ana", "Trujillo", "Antonio", "Moreno", "Thomas", "Hardy", "Christina", "Berglund", "Hanna", "Moos", "Frederique", "Citeaux", "Martin", "Sommer", "Laurence", "Lebihan", "Elizabeth", "Lincoln", "Victoria", "Ashworth", "Patricio", "Simpson", "Francisco", "Chang", "Yang", "Wang", "Pedro", "Afonso", "Elizabeth", "Brown", "Sven", "Ottlieb", "Janine", "Labrune", "Ann", "Devon", "Roland", "Mendel", "Aria", "Cruz", "Diego", "Roel", "Martine", "Rance", "Maria", "Larsson", "Peter", "Franken", "Carine", "Schmitt", "Paolo", "Accorti", "Lino", "Rodriguez", "Eduardo", "Saavedra", "Jose", "Pedro", "Andre", "Fonseca", "Howard", "Snyder", "Manuel", "Pereira", "Mario", "Pontes", "Carlos", "Hernandez", "Yoshi", "Latimer", "Patricia", "McKenna", "Helen", "Bennett", "Philip", "Cramer", "Daniel", "Tonini", "Annette", "Roulet", "Yoshi", "Tannamuri", "John", "Steel", "Renate", "Messner", "Jaime", "Yorres", "Carlos", "Gonzalez", "Felipe", "Izquierdo", "Fran", "Wilson", "Giovanni", "Rovelli", "Catherine", "Dewey", "Jean", "Fresniere", "Alexander", "Feuer", "Simon", "Crowther", "Yvonne", "Moncada", "Rene", "Phillips", "Henriette", "Pfalzheim", "Marie", "Bertrand", "Guillermo", "Fernandez", "Georg", "Pipps", "Isabel", "de", "Bernardo", "Batista", "Lucia", "Carvalho", "Horst", "Kloss", "Sergio", "Gutierrez", "Paula", "Wilson", "Maurizio", "Moroni", "Janete", "Limeira", "Michael", "Holz", "Alejandra", "Camino", "Jonas", "Bergulfsen", "Jose", "Pavarotti", "Hari", "Kumar", "Jytte", "Petersen", "Dominique", "Perrier", "Art", "Braunschweiger", "Pascale", "Cartrain", "Liz", "Nixon", "Liu", "Wong", "Karin", "Josephs", "Miguel", "Angel", "Anabela", "Domingues", "Helvetius", "Nagy", "Palle", "Ibsen", "Mary", "Saveley", "Paul", "Henriot", "Rita", "Miller", "Pirkko", "Koskitalo", "Paula", "Parente", "Karl", "Jablonski", "Matti", "Karttunen", "Zbyszek", "Piestrzeniewicz" }; ; var allDept = _context.Departments.ToList(); var deptId = allDept[rng.Next(0, allDept.Count())]. _context.Add(new Employee {     DateOfJoining = new DateTime(         rng.Next(1918,2021),         rng.Next(1,12),         rng.Next(1,28)                     ),     Name = names[rng.Next(names.Length)] + " " + names[rng.Next(names.Length)],     DepartmentId = deptId, }); await _context.SaveChangesAsync();return await _context.Employees.ToListAsync();
            return await _context.Employees.Include(e => e.Department).ToListAsync();
        }

        private void AddNewDepartment()
        {
            new List<Department>(){
    new Department() { Name = "IT" },
    new Department() { Name = "Job" },
    new Department() { Name = "Finance" }
    }.ForEach(x =>
    {
        if (_context.Departments.Any(s => s.Name == x.Name) == false)
        {
            _context.Add(x);
        }
        else
        {
            Console.WriteLine(x.Name + " already exists!");
        }
    });
            _context.SaveChanges();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            Employee employee = await _context.Employees.Include(e => e.Department).FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                return NotFound();
            }
            else
            {
                return employee;
            }
        }

        // PUT: api/Employees/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, [FromBody]Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //// POST: api/Employees
        //[HttpPost]
        //public ActionResult PostEmployee(Employee employee)
        //{
        //    _context.Employees.Add(employee);
        //    _context.SaveChangesAsync();
        //    return Ok(employee);
        //}



        // POST: api/Employees
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            if (employee.DepartmentId == 0)
                return BadRequest("Invalid Employee Id");


            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        }



        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            Employee employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return employee;
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.Id == id);
        }
    }
}
