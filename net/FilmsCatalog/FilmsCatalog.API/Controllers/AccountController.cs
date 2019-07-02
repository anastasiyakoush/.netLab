using System.Threading.Tasks;
using AutoMapper;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FilmsCatalog.API.Controllers
{
    [ServiceFilter(typeof(LoggingFilter))]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;

        public AccountController(IAccountService accountService, IMapper mapper)
        {
            _accountService = accountService;
            _mapper = mapper;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(RegisterUserModel model)
        {
            var userDTO = _mapper.Map<RegisterUserModel, UserDTO>(model);
            var user = await _accountService.RegistrateAsync(userDTO);

            if (user != null)
            {
                return Ok(user);
            }

            return BadRequest();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var userDTO = _mapper.Map<LoginModel, UserDTO>(model);
            var user = await _accountService.AuthenticateAsync(userDTO);

            if (user != null)
            {
                return Ok(user);
            }

            return BadRequest();
        }
    }
}
