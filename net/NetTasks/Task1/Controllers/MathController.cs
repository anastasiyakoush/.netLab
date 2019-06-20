﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Task1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MathController : ControllerBase
    {
        [HttpGet]
        public ActionResult<MathModel> Get(int a, int b)
        {
            return (a > 0 && b < 0)
                ? MathHelper.Calculate(a, b)
                : null;
        }
    }
}

