using System;

using FluentValidation;

//using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.Core.Interfaces;

namespace Validation
{
    public class FilmValidator : AbstractValidator<FilmModel>
    {
        public FilmValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Year)
                .GreaterThanOrEqualTo(0).LessThanOrEqualTo(DateTime.Now.Year)
                .WithMessage($"Unreal years, please select year between 1910 and {DateTime.Now.Year}");
            RuleFor(x => x.Director).NotEmpty();
        }
    }
}
