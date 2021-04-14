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
    public class DepartmentsController : ControllerBase
    {
        private readonly BookWormContext _context;

        public DepartmentsController(BookWormContext context)
        {
            _context = context;
        }

        // GET: api/Departments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> GetDepartments()
        {
            return await _context.Departments.ToListAsync();
        }

        // GET: api/Departments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Department>> GetDepartment(int id)
        {
            Department Department = await _context.Departments.FindAsync(id);

            if (Department == null)
            {
                return NotFound();
            }

            return Department;
        }

        // PUT: api/Departments/5
        [HttpPut("{id}")]
        public ActionResult PutDepartment(int id, /*[FromBody]*/Department Department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            Department dept = _context.Departments.SingleOrDefault(c => c.Id == id);
            if (dept == null)
            {
                return NotFound();
            }

            dept.Name = Department.Name;
            _context.SaveChanges();
            return Ok("Updated successfully!");
        }

        // POST: api/Departments
        [HttpPost]
        public async Task<ActionResult<Department>> PostDepartment([FromBody]Department Department)
        {
            _context.Departments.Add(Department);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartment", new { id = Department.Id }, Department);
        }

        // DELETE: api/Departments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Department>> DeleteDepartment(int id)
        {
            Department Department = await _context.Departments.FindAsync(id);
            if (Department == null)
            {
                return NotFound();
            }

            _context.Departments.Remove(Department);
            await _context.SaveChangesAsync();

            return Department;
        }

        private bool DepartmentExists(int id)
        {
            return _context.Departments.Any(e => e.Id == id);
        }
    }
}
