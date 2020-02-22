using FilmsCatalog.Core.Interfaces;
using FilmsCatalog.DAL.Core.Interfaces;
using System.Collections.Generic;

namespace FilmsCatalog.DAL.Core.Entities
{
    public class Film : IIdModel, IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Overview { get; set; }
        public IEnumerable<FilmImage> Images { get; set; }
        public IEnumerable<Comment> Comments { get; set; }
        public IEnumerable<Rating> Ratings { get; set; }
    }
}
