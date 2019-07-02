using FilmsCatalog.BLL.Core.DTO;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface IAccountService
    {
        Task<AuthenticatedUserDTO> RegistrateAsync(UserDTO userDTO);
        Task<AuthenticatedUserDTO> AuthenticateAsync(UserDTO userDTO);
        Task<UserDTO> GetUserByIdAsync(string userId);
        Task<UserDTO> GetUserByNameAsync(string userName);
    }
}
