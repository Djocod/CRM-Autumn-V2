import React, { useState } from "react";
import { deletePurchase } from "./settingsBtn.js";

const ViewBtn = ({ item, userId }) => {
  const [valueType, setValueType] = useState("");

  return (
    <div className="set-btn">
      <form action="">
        <label htmlFor={`buyShop-del-${item.id}`}>buyShop</label>
        <input
          type="radio"
          name={`delete-${item.id}`}
          id={`buyShop-del-${item.id}`}
          value="buyShop"
          checked={valueType === "buyShop"}
          onChange={() => setValueType("buyShop")}
        />

        <label htmlFor={`buyNet-del-${item.id}`}>buyNet</label>
        <input
          type="radio"
          name={`delete-${item.id}`}
          id={`buyNet-del-${item.id}`}
          value="buyNet"
          checked={valueType === "buyNet"}
          onChange={() => setValueType("buyNet")}
        />

        <label htmlFor={`refund-del-${item.id}`}>refund</label>
        <input
          type="radio"
          name={`delete-${item.id}`}
          id={`refund-del-${item.id}`}
          value="refund"
          checked={valueType === "refund"}
          onChange={() => setValueType("refund")}
        />
      </form>
      <div className="container-btn">
        <button
          className="del-pur"
          id=""
          onClick={() => deletePurchase(item.id, userId, valueType)}
        >
          deletePurchase
        </button>
      </div>
    </div>
  );
};

export default ViewBtn;
