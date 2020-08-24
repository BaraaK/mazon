import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


function ProductListItem({ item }) {
  return (
    <div className="home-page-product-li">
      <Link id="#item-Link" to={`/products/${item._id}`}>
        <li>
          <div>
            <img
              className="home-page-product-img"
              src={item.image}
              alt="product"
            />
          </div>
          <div className="home-page-product-name">
            <p>{item.name}</p>
          </div>
          <div className="home-page-product-brand">
            <p>{item.brand}</p>
          </div>
          <div className="home-page-product-price">
            <p>{item.price}$</p>
          </div>
          <div className="home-page-product-reviews">
            <div class="home-page-review">
              <ReactStars value={item.rating} edit={false} size={24} activeColor="#ffd700"/>
              <div>{item.numReviews}</div>
               
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
}

export default ProductListItem;
