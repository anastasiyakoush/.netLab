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
using Microsoft.AspNetCore.Mvc;

namespace FilmsCatalog.BLL.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IMapper _mapper;
        private readonly byte[] _secret;

        public AccountService(UserManager<User> userManager, SignInManager<User> signInManager, IMapper mapper)
        {
            _mapper = mapper;
            _signInManager = signInManager;
            _userManager = userManager;
            _secret = AppConfiguration.Secret;
        }

        public async Task<string> AuthenticateAsync(UserDTO userDTO)
        {

            var user = await _userManager.FindByEmailAsync(userDTO.Email);
            if (user != null)
            {
                var result = await _signInManager.PasswordSignInAsync(user.UserName, userDTO.Password, false, false);
                if (result.Succeeded)
                {
                    user = _mapper.Map<UserDTO, User>(userDTO);
                    return await GenerateJwtTokenAsync(user);
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

        public async Task<string> RegistrateAsync(UserDTO userDTO)
        {
            var user = _mapper.Map<UserDTO, User>(userDTO);
            user.Id = null;
            var identityResult = await _userManager.CreateAsync(user, userDTO.Password);
            var newUser = await _userManager.FindByEmailAsync(user.Email);
            if (identityResult.Succeeded)
            {
                await _signInManager.SignInAsync(newUser, false);
                return await GenerateJwtTokenAsync(user);
            }
            return null;
        }

        public async Task LogoutAsync()
        {
            await _signInManager.SignOutAsync();
        }

        private async Task<string> GenerateJwtTokenAsync(User user)
        {
            var now = DateTime.Now;
            var expires = now.AddMinutes(AppConfiguration.Lifetime);
            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(_secret), SecurityAlgorithms.HmacSha256Signature);
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
