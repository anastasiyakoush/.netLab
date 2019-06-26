using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation.Attributes;

namespace FilmsCatalog.API.Models
{
    [Validator(typeof(RegisterUserModel))]
    public class RegisterUserModel
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
