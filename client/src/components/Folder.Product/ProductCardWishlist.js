import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCardWishlist = () => {
  const [dataWishlist, setDataWishlist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/wishlist")
      .then((res) => setDataWishlist(res.data.wishlist));
  }, []);

  return (
    <div className="card-product">
      {dataWishlist &&
        dataWishlist.map((wishlist) => (
          <div>
            <img src={wishlist.image} alt="" className="img-product" />
            <div className="product-card-book">
              <div className="img-container"></div>
              <div className="description-container">
                <div className="description-left">
                  <p className="product-name">{wishlist.title}</p>
                  <span>{wishlist.brand}</span>
                  <span>{wishlist.ref}</span>
                  <span className="price">{wishlist.price} €</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCardWishlist;
