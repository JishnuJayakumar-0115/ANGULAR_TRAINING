using HttpDemo.Api.Models;
using HttpDemo.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace HttpDemo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(FileService fileService) : ControllerBase
    {
        // GET: api/Products
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await fileService.GetAll());
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var data = await fileService.GetAll();
            var product = data.FirstOrDefault(x => x.Id == id);

            if (product == null)
                return NotFound();

            return Ok(product);
        }

        // PUT: api/Products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Product updated)
        {
            var data = await fileService.GetAll();

            var item = data.FirstOrDefault(x => x.Id == id);
            if (item == null)
                return NotFound();

            item.Name = updated.Name;
            item.Price = updated.Price;

            await fileService.SaveAll(data);
            return Ok(item);
        }

        // POST: api/Products
        [HttpPost]
        public async Task<IActionResult> Create(Product product)
        {
            var data = await fileService.GetAll();

            product.Id = data.Count > 0 ? data.Max(x => x.Id) + 1 : 1;

            data.Add(product);
            await fileService.SaveAll(data);

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await fileService.GetAll();
            var item = data.FirstOrDefault(x => x.Id == id);

            if (item == null) return NotFound();

            data.Remove(item);
            await fileService.SaveAll(data);

            return NoContent();
        }
    }
}
