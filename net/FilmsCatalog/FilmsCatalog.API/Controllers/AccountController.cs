using System.Threading.Tasks;
using AutoMapper;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Logging.Filters;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FilmsCatalog.API.Controllers
{
    [ServiceFilter(typeof(LoggingFilter))]
    //[ServiceFilter(typeof(ExceptionFilter))]
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
            var token = await _accountService.RegistrateAsync(userDTO);
            if (token != null)
            {
                return Ok(token);
            }
            return BadRequest();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var userDTO = _mapper.Map<LoginModel, UserDTO>(model);

            var token = await _accountService.AuthenticateAsync(userDTO);
            if (token != null)
            {
                return Ok(token);
            }
            return BadRequest();
        }

        //[Authorize]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _accountService.LogoutAsync();
            if (HttpContext.User.Identity.IsAuthenticated)
            {
                return BadRequest();
            }
            return Ok();
        }

    }
}
