using System.Collections.Generic;
using System.Threading.Tasks;

namespace YandexDiskAPITransmitter.Interfaces
{
    public interface IDiskAPI
    {
        Task<IEnumerable<string>> GetDownloaderUrlsAsync(IEnumerable<string> publicUrls);
    }
}
