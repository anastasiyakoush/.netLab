using FilmsCatalog.Core.Interfaces;

namespace FilmsCatalog.BLL.Core.DTO
{
    public class FilmDTO : IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Overview { get; set; }
    }
}
