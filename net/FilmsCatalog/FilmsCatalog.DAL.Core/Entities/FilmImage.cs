using FilmsCatalog.DAL.Core.Interfaces;

namespace FilmsCatalog.DAL.Core.Entities
{
    public class FilmImage : IIdModel
    {
        public int Id { get; set; }
        public int FilmId { get; set; }
        public string Url { get; set; }
        public virtual Film Film { get; set; }
    }
}
