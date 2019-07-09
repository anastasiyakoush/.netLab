using FilmsCatalog.Core.Interfaces;
using System.Collections.Generic;

namespace FilmsCatalog.API.Models
{
    public class FilmInfoModel : IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Overview { get; set; }
        public IEnumerable<string> Images { get; set; }
        public IEnumerable<CommentModel> Comments { get; set; }
        public object Rating { get; set; }
    }
}
