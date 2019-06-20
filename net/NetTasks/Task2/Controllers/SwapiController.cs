using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Task2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SwapiController : ControllerBase
    {
        public object Get()
        {
            using (var client = new HttpClient())
            {
                var response = client.GetAsync("https://swapi.co/api/starships").Result;
                return response.Content.ReadAsAsync<Object>();
            }
        }
    }
}