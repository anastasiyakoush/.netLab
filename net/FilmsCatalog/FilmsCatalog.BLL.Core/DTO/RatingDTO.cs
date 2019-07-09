namespace FilmsCatalog.BLL.Core.DTO
{
    public class RatingDTO 
    {
        public string UserName { get; set; }
        public int FilmId { get; set; }
        public int Rate { get; set; }
        public int VotedPeople { get; set; }
    }
}
