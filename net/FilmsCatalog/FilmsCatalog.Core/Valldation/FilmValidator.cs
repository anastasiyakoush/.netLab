using FluentValidation;
using FilmsCatalog.Core.Interfaces;

namespace FilmsCatalog.Core.Validation
{
    public class FilmValidator<T> : AbstractValidator<T> where T : IFilmInfo
    {
        public FilmValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Year)
                .GreaterThanOrEqualTo(Consts.FirstFilmYear)
                .LessThanOrEqualTo(Consts.CurrentYear)
                .WithMessage($"Invalid year");
            RuleFor(x => x.Director).NotEmpty();
        }
    }
}
