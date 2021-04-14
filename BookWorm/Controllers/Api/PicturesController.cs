using System;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookWorm.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class PicturesController : ControllerBase
    {


        // POST: api/pictures/1
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult PostPicture()//Employee /*dynamic*/ employee )
        {
            try
            {
                IFormFile file = Request.Form.Files["photoFileName"];
                string folderName = Path.Combine("Resources", "Images");
                /**Using this path causes Angular CLI to recompile*////string folderName = Path.Combine("ClientApp", "src","assets","images", "avatars");
                string pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (file == null)
                {
                    return BadRequest("No image uploaded");
                }
                else if (file.Length > 0)
                {
                    //string fileName = DateTime.Now.ToString("yyyyMMddHHmmssfff") + ".png";
                    //string fileName = DateTime.Now.ToString("yyyyMMddHHmmssfff") + "_" + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(pathToSave, fileName);
                    string dbPath = Path.Combine(folderName, fileName);
                    using (FileStream stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(fileName);
                }
                else
                {
                    return BadRequest();
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error" + ex);
            }
            finally
            {
                Console.WriteLine("Finally...");
            }

        }
    }

}
