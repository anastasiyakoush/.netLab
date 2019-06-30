using FilmsCatalog.DAL.Core.Interfaces;

namespace FilmsCatalog.DAL.Core.Entities
{
    public class FilmImage : IId
    {
        public int Id { get; set; }
        public int FilmId { get; set; }
        public string Url { get; set; }

        public Film Film { get; set; }
    }
}
