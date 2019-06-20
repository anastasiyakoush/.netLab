using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Task2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SwapiController : ControllerBase
    {
        private string _url = "https://swapi.co/api/starships";

        [HttpGet("[action]")]
        public ActionResult<Starships> Get()
        {
            using (var client = new HttpClient())
            {
                var response = client.GetAsync(_url).Result;
                var json = response.Content.ReadAsStringAsync().Result;
                var starships = JsonConvert.DeserializeObject<Starships>(json);
                starships.Results = starships.Results.Take(5).Select((r, index) => { r.Index = ++index; return r; }).ToList();
                return starships;
            }
        }
              
        [HttpGet("[action]")]
        public async Task<Starships> GetAll()
        {
            var response = GetAsync(_url).Result;

            while (!String.IsNullOrEmpty(response.Next))
            {
                var result = GetAsync(response.Next).Result;
                response.Results.AddRange(result.Results);
                response.Next = result.Next;
            }
            
            response.Results = response.Results.Select((r, i) => { r.Index = ++i; return r; }).ToList();
            return response;
        }

        private async Task<Starships> GetAsync(string uri)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(uri);
                var json = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<Starships>(json);
            }
        }
    }
}