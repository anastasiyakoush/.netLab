using System;

namespace FilmsCatalog.BLL.Core.DTO
{
    public class CommentDTO
    {
        public int FilmId { get; set; }
        public string UserName { get; set; }
        public string Content { get; set; }
        public DateTime Time { get; set; }
    }
}
