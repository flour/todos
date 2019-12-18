using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using todos.api.Models;
using todos.api.Models.Entities;

namespace todos.api.Controllers
{
    [Route("todos")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly MainDbContext _context;
        private readonly ILogger<TodosController> _logger;

        public TodosController(MainDbContext context, ILogger<TodosController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTodosAsync()
            => Ok(await _context.Todos.ToListAsync());

        [HttpGet("{id}", Name = "GetTodo")]
        public async Task<IActionResult> GetTodoAsync(int id)
            => Ok(await _context.Todos.FirstOrDefaultAsync(e => e.Id == id));

        [HttpPost]
        public async Task<IActionResult> AddNewTodoAsync([FromBody] TodoViewModel model)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Todo model is invalid: {0}", model);
                return BadRequest(ModelState);
            }

            var entity = new Todo {Title = model.Title};
            _context.Add(entity);
            return await _context.SaveChangesAsync() == 0
                ? StatusCode(500, "Could not create new todo record")
                : CreatedAtRoute("GetTodo", new {id = entity.Id});
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveTodoAsync(int id)
        {
            var entity = await _context.Todos.FirstOrDefaultAsync(e => e.Id == id);
            if (entity == null)
                return NotFound();
            _context.Remove(entity);
            return await _context.SaveChangesAsync() == 0
                ? StatusCode(500, "Could not remove todo") as IActionResult
                : NoContent();
        }
    }
}