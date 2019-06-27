using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Services
{
    public class CommentService : ICommentService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public CommentService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task AddCommentAsync(CommentDTO commentDTO)
        {
            var comment = _mapper.Map<CommentDTO, Comment>(commentDTO);
            await _uow.Comments.CreateAsync(comment);
            await _uow.SaveAsync();
        }

        public async Task<IEnumerable<CommentDTO>> GetFilmCommentsAsync(int filmId)
        {
            var comments = await _uow.Comments.GetAllAsync();
            var filmComments = comments.Where(x => x.FilmId == filmId);
            var result = _mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTO>>(filmComments);
            return result;
        }

        public async Task<IEnumerable<CommentDTO>> GetUserCommentsAsync(string userId)
        {
            var comments = await _uow.Comments.GetAllAsync();
            var filmComments = comments.Where(x => x.UserId == userId);
            var result = _mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTO>>(filmComments);
            return result;
        }
    }
}
