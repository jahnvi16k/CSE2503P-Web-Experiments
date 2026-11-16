import React, { useEffect, useState } from "react";
import "./App.css";

function ProductCard({ product }) {
  return (
    <article className="card">
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <h3>Price: ₹{product.price.toLocaleString("en-IN")}</h3>
    </article>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error(`API request failed (${response.status})`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p className="message">Loading Products...</p>;
  if (error) return <p className="message error">Error: {error}. Make sure the backend server is running.</p>;

  return (
    <main className="container">
      <h1>Product Dashboard</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default App;
