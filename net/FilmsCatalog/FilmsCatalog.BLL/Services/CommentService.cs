using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.Core;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
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

            if (film == null)
            {
                throw new Exception(Consts.FilmNotExistedMessage);
            }

            var userDTO = await _accountService.GetUserByNameAsync(commentDTO.UserName);
            var user = _mapper.Map<UserDTO, User>(userDTO);

            if (user == null)
            {
                throw new Exception(Consts.UserNotExistedMessage);
            }

            var comment = _mapper.Map<CommentDTO, Comment>(commentDTO);
            FillCommentFiels(comment, film, user);

            await _uow.Comments.CreateAsync(comment);
            await _uow.SaveAsync();
        }

        public async Task<IEnumerable<CommentDTO>> GetFilmCommentsAsync(int filmId)
        {
            var comments = await _uow.Comments.GetAll()
                                 .Select(x => createCommentDTO(x.FilmId, x.User.UserName, x.Content, x.Time))
                                 .Where(x => x.FilmId == filmId)
                                 .ToListAsync();

            return comments;
        }

        public async Task<IEnumerable<CommentDTO>> GetUserCommentsAsync(string userId)
        {
            var comments = await _uow.Comments.GetAll()
                                .Where(x => x.UserId == userId)
                                .ToListAsync();

            var commentDtos = _mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTO>>(comments);

            return commentDtos;
        }

        private Comment FillCommentFiels(Comment comment, Film film, User user)
        {
            comment.Film = film;
            comment.User = user;
            comment.Time = DateTime.Now;

            return comment;
        }

        private CommentDTO createCommentDTO(int filmId, string username, string content, DateTime time)
        {
            return new CommentDTO()
            {
                FilmId = filmId,
                UserName = username,
                Content = content,
                Time = time
            };
        }
    }
}
