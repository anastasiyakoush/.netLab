using FilmsCatalog.DAL.Core.Interfaces;

namespace FilmsCatalog.DAL.Core.Entities
{
    public class Comment : IId
    {
        public int Id { get; set; }
        public int FilmId { get; set; }
        public string UserId { get; set; }
        public string Content { get; set; }

        public Film Film { get; set; }
        public User User { get; set; }
    }
}
