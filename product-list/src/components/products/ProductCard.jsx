import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div>
        <h3>{product.price}</h3>
      </div>
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
