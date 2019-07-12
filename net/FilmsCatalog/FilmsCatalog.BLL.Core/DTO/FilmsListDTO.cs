using FilmsCatalog.Core.Enums;

namespace FilmsCatalog.BLL.Core.DTO
{
    public class FilmsListDTO
    {
        public int Start { get; set; } 
        public string QueryString { get; set; }
        public int? SortByName { get; set; }
        public int? SortByYear { get; set; }
        public int? SortByRating { get; set; }
    }
}
