namespace FilmsCatalog.API.Models
{
    public class PostRatingModel
    {
        public int FilmId { get; set; }
        public string UserName { get; set; }
        public double Rate { get; set; }
    }
}
