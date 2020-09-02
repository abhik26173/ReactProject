import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";

export const Product = ({ product }) => {
  const history = useHistory();

  const handleSummary = () => {
    history.push(`/product-summary/${product.product_id}`);
  };

 // const handleAddToCart = () => {};

  return (
    <div className="card" style={{ width: "400px" }}>
      <img className="card-img-top" src={product.image} alt="Card" />
      <div className="card-body">
        <h4 className="card-title"> {product.product_name}</h4>
        <p className="card-text">
          {Number(product.unit_price).toLocaleString("en-US", {
            style: "currency",
            currency: "INR",
          })}
        </p>
      </div>

      <button className="btn btn-outline-info" onClick={handleSummary}>
        Summary
      </button>
    </div>
  );
};
