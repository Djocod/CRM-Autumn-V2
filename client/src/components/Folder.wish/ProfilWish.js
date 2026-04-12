import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Folder.Product/ProductCard";
import Navigation from "../Navigation";

const ProfilWish = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [Words, setWords] = useState("");
  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  //   const [catWords, setCatWords] = useState("");
  const toggleCatgerory = (cat) => {
    setCategory((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${id}`)
      .then((res) => setUser(res.data.data));

    axios
      .get(`http://localhost:8000/api/wishlist`)
      .then((res) => setWishlist(res.data.wishlist));

    if (Words.length > 0) {
      axios
        .get(`http://localhost:8000/api/products/search?search=${Words}`)
        .then((res) => setProduct(res.data.products));
    } else if (category.length > 0) {
      console.log(category);

      axios
        .get(
          `http://localhost:8000/api/products/category/${category.join(", ")}`,
        )
        .then((res) => setProduct(res.data.products));
    } else {
      axios
        .get(`http://localhost:8000/api/products`)
        .then((res) => setProduct(res.data.products));
    }
  }, [id, Words, category]);
  return (
    <div>
      {user && (
        <div key={user.id}>
          <img src={user.picture_medium} alt="" />
          <h4>
            {user.last_name}, {user.first_name}
          </h4>
        </div>
      )}
      {wishlist &&
        wishlist
          .filter((d) => (d.user_id ? d.user_id === user.id : undefined))
          .map((wish) => (
            <div key={wish.id}>
              {/* <ProductCard key={wish.product_id} user={user} /> */}
              <p>{wish.product_id}</p>
            </div>
          ))}
      <div className="container-search-input">
        <i className="fa-brands fa-sistrix"></i>
        <input
          type="text"
          placeholder="Recherche"
          id="search-brand"
          className="input-search"
          onChange={(e) => setWords(e.target.value.toLowerCase())}
        />
      </div>
      <div className="modal-cointainer">
        <p>{category.join(" / ")}</p>
        <ul>
          <li>
            <button onClick={() => toggleCatgerory("homme")}>Homme</button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("femme")}>Femme</button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("vetements")}>
              Vetement
            </button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("chaussures")}>
              Chaussures
            </button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("bijoux")}>Bijoux</button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("linge de maison")}>
              Linge de maison
            </button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("parfum")}>
              Parfumerie
            </button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("bagagerie")}>
              Baggagerie
            </button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("sacs")}>sacs</button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("accessoires")}>
              Accessoires
            </button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("cosmetique")}>
              Cosmetique
            </button>
          </li>
          <li>
            <button onClick={() => toggleCatgerory("montres")}>montres</button>
          </li>
          <li>
            <button onClick={() => setCategory([])}>Tous les prduits</button>
          </li>
        </ul>
      </div>
      {products &&
        products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .map((product) => (
            <ProductCard key={product.id} product={product} user={user} />
          ))}
      <Navigation />
    </div>
  );
};

export default ProfilWish;
