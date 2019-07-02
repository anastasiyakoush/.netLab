using FluentValidation.Attributes;

namespace FilmsCatalog.API.Models
{
    [Validator(typeof(LoginModel))]
    public class LoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
