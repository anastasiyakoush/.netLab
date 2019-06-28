namespace FilmsCatalog.API.Models
{
    public class CommentModel
    {       
        public int FilmId { get; set; }
        public string UserName { get; set; }
        public string Content { get; set; }
    }
}
