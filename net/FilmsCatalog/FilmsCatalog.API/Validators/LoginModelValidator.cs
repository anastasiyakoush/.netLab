using FilmsCatalog.API.Models;
using FilmsCatalog.Core;
using FluentValidation;

namespace FilmsCatalog.API.Validators
{
    public class LoginModelValidator : AbstractValidator<LoginModel>
    {
        public LoginModelValidator()
        {
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
            RuleFor(x => x.Password).NotEmpty().MinimumLength(Consts.PasswordMinLength);
        }
    }
}
