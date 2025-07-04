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

List<Product> products =
[
    new() { Id = 1, Name = "Product 1", Description = "Description 1", Price = 10.99m, Category = "Category A" },
    new() { Id = 2, Name = "Product 2", Description = "Description 2", Price = 20.99m, Category = "Category B" },
    new() { Id = 3, Name = "Product 3", Description = "Description 3", Price = 30.99m, Category = "Category C" }
];

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
