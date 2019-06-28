using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Services
{
    public class CommentService : ICommentService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly IAccountService _accountService;

        public CommentService(IUnitOfWork uow, IMapper mapper, IAccountService accountService)
        {
            _uow = uow;
            _mapper = mapper;
            _accountService = accountService;
        }

        public async Task AddCommentAsync(CommentDTO commentDTO)
        {
            var film = await _uow.Films.GetAsync(commentDTO.FilmId);
            var userDTO = await _accountService.GetUserByNameAsync(commentDTO.UserName);
            var user = _mapper.Map<UserDTO, User>(userDTO);
            if (film != null && user != null)
            {
                var comment = _mapper.Map<CommentDTO, Comment>(commentDTO);
                comment.Film = film;
                comment.User = user;
                comment.Time = DateTime.Now;
                await _uow.Comments.CreateAsync(comment);
                await _uow.SaveAsync();
            }
        }

        public async Task<IEnumerable<CommentDTO>> GetFilmCommentsAsync(int filmId)
        {
            var commentsQuery = await _uow.Comments.GetAllAsync();
            var filmComments = commentsQuery.Where(x => x.FilmId == filmId);
            var result = _mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTO>>(filmComments);
            return result;
        }

        public async Task<IEnumerable<CommentDTO>> GetUserCommentsAsync(string userId)
        {
            var commentsQuery = await _uow.Comments.GetAllAsync();
            var filmComments = commentsQuery.Where(x => x.UserId == userId);
            var result = _mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTO>>(filmComments);
            return result;
        }
    }
}
