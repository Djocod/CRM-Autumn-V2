import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./Folder.Product/ProductCard.js";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    if (brandName.length > 0) {
      axios
        .get(`http://localhost:8000/api/products/search?search=${brandName}`)
        .then((res) => setProductsData(res.data.products));
    } else {
      axios
        .get(`http://localhost:8000/api/products`)
        .then((res) => setProductsData(res.data.products));
    }
  }, [brandName]);

  return (
    <div className="card-product-container">
      {productsData &&
        productsData
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .map((product) => <ProductCard key={product.id} product={product} />)}
      <div className="input-container">
        <i className="fa-brands fa-sistrix"></i>
        <input
          type="text"
          placeholder="Recherche"
          id="search-brand"
          className="input-search"
          onChange={(e) => setBrandName(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
};

export default Products;
