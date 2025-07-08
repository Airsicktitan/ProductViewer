import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      category
    }
  }
`;

export function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = data?.products.filter((product: any) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-600">Error: {error.message}</p>;
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Product List
      </h2>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full border border-gray-300 rounded-m p-2 mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product: any) => (
          <li
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-700">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="mt-2 font-medium text-green-600">
              Price: ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Category: {product.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
