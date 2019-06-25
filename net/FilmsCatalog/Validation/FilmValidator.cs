using FluentValidation;

using FilmsCatalog.Core.Interfaces;
using FilmsCatalog.Core;

namespace Validation
{
    public class FilmValidator<T> : AbstractValidator<T> where T : IFilmInfo
    {
        public FilmValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Year)
                .GreaterThanOrEqualTo(Consts.FirstFilmYear)
                .LessThanOrEqualTo(Consts.CurrentYear)
                .WithMessage($"Unreal years, please select year between 1910 and {Consts.CurrentYear}");
            RuleFor(x => x.Director).NotEmpty();
        }
    }
}
