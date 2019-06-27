using FilmsCatalog.BLL.Core.DTO;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface IAccountService
    {
        Task<string> RegistrateAsync(UserDTO userDTO);
        Task<string> AuthenticateAsync(UserDTO userDTO);
        Task<UserDTO> GetUserByIdAsync(string userId);
        Task LogoutAsync();
    }
}
