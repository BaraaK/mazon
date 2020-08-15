import React from "react";
import "../App.css";
import ProductListItem from "./ProductListItem";

function ProductList({ products }) {
  const productList = products.map((item, index) => {
    return <ProductListItem key={index} item={item} />;
  });
  return <ul className="home-page-products-ul">{productList}</ul>;
}

export default ProductList;
