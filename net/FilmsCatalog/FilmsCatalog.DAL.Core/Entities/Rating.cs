namespace FilmsCatalog.DAL.Core.Entities
{
    public class Rating
    {
        public int FilmId { get; set; }
        public string UserId { get; set; }
        public int Rate { get; set; }
        public virtual Film Film { get; set; }
        public virtual User User { get; set; }
    }
}
