import axios from "axios";
import React, { useEffect, useState } from "react";
import { deleteView } from "../Folder.Btn/settingsBtn";

const UsersProductCardView = ({ item }) => {
  const [valueItem, setValueItem] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => setValueItem(res.data.products));
  }, []);

  return (
    <div className="product-card-user-container">
      {valueItem &&
        valueItem
          .filter((value) => value.id === item.product_id)
          .map((product) => (
            <div key={product.id} className="product-card-user">
              <div className="img-container">
                <img src={product.picture} alt="" className="img-product" />
              </div>
              <div className="description-container">
                <div className="description-left">
                  <p className="product-name">{product.title}</p>
                  <span className="product-brand">{product.brand}</span>
                  <span>{product.ref}</span>
                  <p className="product-params">
                    Couleur : {product.colors[0].name} - Taille :
                    {product.sizes[2] ? product.sizes[2] : " N/A "}
                  </p>
                </div>
                <div className="price-product">
                  <p>{product.price} €</p>
                </div>
              </div>
              <button
                className="delete-view"
                onClick={() => deleteView(item.id)}
              >
                Deleteview
              </button>
            </div>
          ))}
    </div>
  );
};

export default UsersProductCardView;
