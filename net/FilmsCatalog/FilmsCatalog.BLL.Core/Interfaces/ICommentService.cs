using FilmsCatalog.BLL.Core.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface ICommentService
    {
        Task AddCommentAsync(CommentDTO commentDTO);
        IQueryable<CommentDTO> GetFilmCommentsAsync(int filmId);
        Task<IEnumerable<CommentDTO>> GetUserCommentsAsync(string userId);
    }
}
