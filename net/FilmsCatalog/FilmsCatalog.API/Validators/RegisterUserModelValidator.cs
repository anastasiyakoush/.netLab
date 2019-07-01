using FilmsCatalog.API.Models;
using FluentValidation;

namespace FilmsCatalog.API.Validators
{
    public class RegisterUserModelValidator : AbstractValidator<RegisterUserModel>
    {
        public RegisterUserModelValidator()
        {
            RuleFor(x => x.UserName).NotEmpty().MinimumLength(3);
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
            RuleFor(x => x.Password).NotEmpty().MinimumLength(5);
        }
    }
}
