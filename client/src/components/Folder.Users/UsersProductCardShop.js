import React, { useEffect, useState } from "react";
import ViewBtn from "../Folder.Btn/ViewBtn.js";
import axios from "axios";

const UsersProductCardShop = ({ item, typeSection }) => {
  const [valueSession, setValueSession] = useState([]);
  const [valueClass, setValueClass] = useState("");
  const [valueItem, setValueItem] = useState([]);
  console.log(valueItem, item);

  useEffect(() => {
    if (typeSection === "buyShop") {
      setValueSession("En magasin");
      setValueClass("shop");
    } else if (typeSection === "buyNet") {
      setValueSession("En ligne");
      setValueClass("net");
    } else if (typeSection === "refund") {
      setValueSession("Remboursé");
      setValueClass("refund");
    }

    axios
      .get(`http://localhost:8000/api/product`)
      .then((res) => setValueItem(res.data.products));
  }, [typeSection]);

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
                  <div className="span-snr">
                    <span>{product.ref} |</span>{" "}
                    <span className={valueClass}>{valueSession}</span>
                  </div>
                  <p className="product-params">
                    Couleur : {product.colors[0].name} - Taille :
                    {product.sizes[2] ? product.sizes[2] : " N/A "}
                  </p>
                </div>
                <div className="price-product">
                  <p>{product.price} €</p>
                </div>
              </div>
              <ViewBtn key={item.id} item={item} />
            </div>
          ))}
    </div>
  );
};

export default UsersProductCardShop;
