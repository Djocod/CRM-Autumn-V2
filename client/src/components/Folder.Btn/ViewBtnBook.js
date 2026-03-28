import React, { useState } from "react";
import { addview, addPurchase } from "./settingsBtn.js";

const ViewBtnBook = ({ product, userId }) => {
  const [valueType, setValueType] = useState("");
  return (
    <div className="set-btn">
      <form action="">
        <label htmlFor={`buyShop-${product.id}`}>buyShop</label>
        <input
          type="radio"
          name={`type-${product.id}`}
          id={`buyShop-${product.id}`}
          value="buyShop"
          checked={valueType === "buyShop"}
          onChange={() => setValueType("buyShop")}
        />

        <label htmlFor={`buyNet-${product.id}`}>buyNet</label>
        <input
          type="radio"
          name={`type-${product.id}`}
          id={`buyNet-${product.id}`}
          value="buyNet"
          checked={valueType === "buyNet"}
          onChange={() => setValueType("buyNet")}
        />

        <label htmlFor={`refund-${product.id}`}>refund</label>
        <input
          type="radio"
          name={`type-${product.id}`}
          id={`refund-${product.id}`}
          value="refund"
          checked={valueType === "refund"}
          onChange={() => setValueType("refund")}
        />
      </form>
      <div className="container-btn">
        <button
          className="add-pur"
          id=""
          onClick={() => addPurchase(product.id, userId, valueType)}
        >
          purchase
        </button>
        <button
          className="add-view"
          id=""
          onClick={() => addview(product.id, userId)}
        >
          view
        </button>
      </div>
    </div>
  );
};

export default ViewBtnBook;
