using System.Threading.Tasks;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using FilmsCatalog.DAL.Core.Entities;
using System.IdentityModel.Tokens.Jwt;
using System;
using FilmsCatalog.Core.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Security.Claims;

namespace FilmsCatalog.BLL.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IMapper _mapper;

        public AccountService(UserManager<User> userManager, SignInManager<User> signInManager, IMapper mapper)
        {
            _mapper = mapper;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        public async Task<AuthenticatedUserDTO> RegistrateAsync(UserDTO userDTO)
        {
            var user = _mapper.Map<UserDTO, User>(userDTO);
            var identityResult = await _userManager.CreateAsync(user, userDTO.Password);

            if (identityResult.Succeeded)
            {
                return await AuthenticateAsync(userDTO);
            }

            return null;
        }

        public async Task<AuthenticatedUserDTO> AuthenticateAsync(UserDTO userDTO)
        {
            var user = await _userManager.FindByEmailAsync(userDTO.Email);

            if (user != null)
            {
                var result = await _signInManager.PasswordSignInAsync(user.UserName, userDTO.Password, false, false);

                if (result.Succeeded)
                {
                    var authenticatedUserDTO = _mapper.Map<User, AuthenticatedUserDTO>(user);
                    authenticatedUserDTO.Token = GenerateJwtTokenAsync(user);

                    return authenticatedUserDTO;
                }
            }

            return null;
        }

        public async Task<UserDTO> GetUserByIdAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            var userDTO = _mapper.Map<User, UserDTO>(user);

            return userDTO;
        }

        public async Task<UserDTO> GetUserByNameAsync(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            var userDTO = _mapper.Map<User, UserDTO>(user);

            return userDTO;
        }

        private string GenerateJwtTokenAsync(User user)
        {
            var now = DateTime.Now;
            var expires = now.AddHours(AppConfiguration.Lifetime);
            var secret = AppConfiguration.Secret;
            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(secret), SecurityAlgorithms.HmacSha256Signature);
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var jwtToken = new JwtSecurityToken(
                    notBefore: now,
                    claims: claims,
                    expires: expires,
                    signingCredentials: signingCredentials
                );

            return new JwtSecurityTokenHandler().WriteToken(jwtToken);
        }
    }
}
