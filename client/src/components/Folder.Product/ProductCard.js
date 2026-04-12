import axios from "axios";
import React, { useRef } from "react";

const ProductCard = ({ product, user }) => {
  const styleBtn = useRef(null);
  const handleIdWihslist = (PWhislist) => {
    const value = styleBtn.current;
    if (!value) return;

    if (styleBtn) {
      value.classList.add("styleLikeBtn");
      console.log(PWhislist);

      axios
        .post(`http://localhost:8000/api/wishlist/${user.id}/${PWhislist}`)
        .then((res) => console.log(res));
    } else {
      value.classList.remove("styleLikeBtn");
    }
  };

  return (
    <div className="card-product">
      <div className="product-card-book">
        <div className="img-container">
          <img src={product.picture} alt="" className="img-product" />

          <button className="add-wishlist" ref={styleBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                fill="#F7F8F8"
                className=""
                onClick={() => handleIdWihslist(product.id)}
              />
            </svg>
          </button>
        </div>
        <div className="description-container">
          <div className="description-left">
            <p className="product-name">{product.title}</p>
            <p>{product.id}</p>
            <p>{product.brand}</p>
            <p>{product.ref}</p>
            <p>{product.category}</p>
            <p>{product.tags}</p>
            <span className="price">{product.price} €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
