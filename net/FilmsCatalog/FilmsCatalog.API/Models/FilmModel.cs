using FluentValidation.Attributes;
using FilmsCatalog.Core.Interfaces;

namespace FilmsCatalog.API.Models
{
    [Validator(typeof(FilmModel))]
    public class FilmModel : IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Overview { get; set; }
    }
}
