using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsCatalog.BLL.Core.DTO
{
    public class AuthenticatedUserDTO
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }
}
