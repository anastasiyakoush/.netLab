using FluentValidation.Attributes;

using FilmsCatalog.Core.Interfaces;
using FilmsCatalog.DAL.Core.Interfaces;

namespace FilmsCatalog.DAL.Core.Entities
{
    [Validator(typeof(Film))]
    public class Film : IModel, IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
    }
}
