var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

List<Product> products = [];
for (int i = 0; i <= 25; i++)
{
    products.Add(new Product
    {
        Id = i,
        Name = $"Product {i}",
        Description = $"Description for Product {i}",
        Price = 10.99m + i, // Example price increment
        Category = "Category " + (char)('A' + (i % 3)) // Example category assignment
    });
}

app.MapGet("/products", () => Results.Ok(products))
    .WithName("GetProducts");

app.MapGet("/products/{id:int}", (int id) =>
{
    var product = products.FirstOrDefault(p => p.Id == id); // Find the product by ID or return null
    // If the product is found, return it; otherwise, return NotFound
    // This is a simple in-memory search; in a real application, you would query a database
    // or another data source.
    return product is not null ? Results.Ok(product) : Results.NotFound();
});

app.Run();
