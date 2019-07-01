using FluentValidation.Attributes;
using FilmsCatalog.Core.Interfaces;
using FilmsCatalog.DAL.Core.Interfaces;
using System.Collections.Generic;

namespace FilmsCatalog.DAL.Core.Entities
{
    public class Film : IId, IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public IEnumerable<Comment> Comments { get; set; }
    }
}
