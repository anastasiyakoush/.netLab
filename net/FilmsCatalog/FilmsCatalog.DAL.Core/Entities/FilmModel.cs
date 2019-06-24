using FilmsCatalog.Core.Interfaces;
using FilmsCatalog.DAL.Core.Interfaces;
using FluentValidation.Attributes;

namespace FilmsCatalog.DAL.Core.Entities
{
    [Validator(typeof(FilmModel))]
    public class FilmModel : IModel, IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
    }
}
