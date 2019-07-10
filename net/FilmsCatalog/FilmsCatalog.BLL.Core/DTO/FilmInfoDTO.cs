using FilmsCatalog.Core.Interfaces;
using System.Collections.Generic;

namespace FilmsCatalog.BLL.Core.DTO
{
    public class FilmInfoDTO : IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Overview { get; set; }
        public IEnumerable<string> Images { get; set; }
        public IEnumerable<CommentDTO> Comments { get; set; }
        public FilmRatingDTO Rating { get; set; }
    }
}
