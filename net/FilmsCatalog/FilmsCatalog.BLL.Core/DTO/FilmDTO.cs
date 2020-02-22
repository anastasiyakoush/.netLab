using FilmsCatalog.Core.Interfaces;
using System.Collections.Generic;

namespace FilmsCatalog.BLL.Core.DTO
{
    public class FilmDTO : IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Overview { get; set; }
        public IEnumerable<string> Images { get; set; }
        public string Poster { get; set; }
        public IEnumerable<CommentDTO> Comments { get; set; }
        public IEnumerable<double> Ratings { get; set; }
    }
}
