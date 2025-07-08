import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import { ProductList } from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
          Available Products
        </h1>
        <div className="max-w-5xl mx-auto">
          <ProductList />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
