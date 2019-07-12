using FilmsCatalog.Core;
using FilmsCatalog.Core.Enums;

namespace FilmsCatalog.API.Models
{
    public class PostFilmsListModel
    {
        public int Start { get; set; } = Consts.StartFilmIndexToReturn;
        public string QueryString { get; set; }
        public int? SortByName { get; set; }
        public int? SortByYear { get; set; }
        public int? SortByRating { get; set; }
    }
}
