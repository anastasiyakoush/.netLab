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
        [HttpGet("[action]")]
        public ActionResult<Starships> Get()
        {
            using (var client = new HttpClient())
            {
                var response = Task.Run(() => client.GetAsync(Consts.URL)).Result;
                var json = Task.Run(() => response.Content.ReadAsStringAsync()).Result;
                var starships = JsonConvert.DeserializeObject<Starships>(json);

                starships.Results = starships.Results.Take(5)
                    .Select((r, index) => { r.Index = ++index; return r; })
                    .ToList();

                return starships;
            }
        }

        [HttpGet("[action]")]
        public async Task<Starships> GetAll()
        {
            var starships = await GetStarshipsAsync(Consts.URL);

            while (!string.IsNullOrEmpty(starships.Next))
            {
                var response = await GetStarshipsAsync(starships.Next);
                starships.Results.AddRange(response.Results);
                starships.Next = response.Next;
            }

            starships.Results = starships.Results
                .Select((r, index) => { r.Index = index; return r; })
                .ToList();

            return starships;
        }

        private async Task<Starships> GetStarshipsAsync(string url)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(url);
                var json = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<Starships>(json);
            }
        }
    }
}