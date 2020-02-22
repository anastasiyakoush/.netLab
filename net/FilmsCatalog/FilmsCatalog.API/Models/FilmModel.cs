using FluentValidation.Attributes;
using FilmsCatalog.Core.Interfaces;
using System.Collections.Generic;

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
        public string Poster { get; set; }
        public double Rating { get; set; }
    }
}
