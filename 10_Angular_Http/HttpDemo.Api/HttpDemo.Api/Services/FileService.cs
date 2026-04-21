using HttpDemo.Api.Models;
using System.Text.Json;

namespace HttpDemo.Api.Services
{
    public class FileService
    {
        private readonly string _filePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "data.json");

        private static readonly JsonSerializerOptions _jsonOptions = new()
        {
            WriteIndented = true
        };

        public async Task<List<Product>> GetAll()
        {
            if (!File.Exists(_filePath))
                return [];

            var json = await File.ReadAllTextAsync(_filePath);

            using var doc = JsonDocument.Parse(json);

            if (doc.RootElement.ValueKind != JsonValueKind.Array)
                return [];

            return JsonSerializer.Deserialize<List<Product>>(json, _jsonOptions) ?? [];
        }

        public async Task SaveAll(List<Product> products)
        {
            var json = JsonSerializer.Serialize(products, _jsonOptions);
            await File.WriteAllTextAsync(_filePath, json);
        }
    }
}
