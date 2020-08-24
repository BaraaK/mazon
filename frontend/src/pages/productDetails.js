import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../reducers/product/productActions";
import { Spinner } from "react-bootstrap";
import "../App.css";
import ReactStars from "react-rating-stars-component";
import {addTocart} from '../reducers/cart/cartActions'

function ProductDetails(props) {
    const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(fetchProductDetails(props.match.params.id));
  }, []);

  return (
    <div className="product-details">
      <div>{loading && <Spinner animation="border" />}</div>
      <div>{error.length !== 0 && <p>There is an error</p>}</div>
      <div>
        {typeof product.length !== "undefined" && (
          <div>
            <Link to="/">
              <i className="fas fa-chevron-circle-left"></i>Back
            </Link>
            <ul className="details-page-products-ul">
              <li className=" product-details-page-image">
                <img src={`../${product[0].image}`} />
              </li>
              <li className="product-details-page-li">
                <div className="product-details-page-text-info">
                  <h3>{product[0].name}</h3>
                  <h5>
                    <ReactStars
                      value={product[0].rating}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </h5>
                  <p>{product[0].numReviews} Customer reviews</p>
                  <p>
                    price: <span className="red">{product[0].price}</span> $
                  </p>
                  <p>description:</p>
                </div>
              </li>
              <li className=" product-details-page-li border">
                <div className="product-details-page-text-info">
                  <p>price: <span className="red">{Number(product[0].price)*Number(quantity)} </span>$</p>
                  <p>
                    status:{" "}
                    <span className="red">
                      {product[0].count > 0 ? "In stock" : "Unavailable"}
                    </span>
                  </p>
                  <div> Quantity: 
                    <select value={quantity}  onChange={(e) => {
                      setQuantity(e.target.value);
                    }}>
                      {[...Array(product[0].count).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <div>
                      {product[0].count > 0 && (
                        <button className="btn btn-add-to-cart" onClick={() => dispatch(addTocart(product[0]._id,quantity))}>
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
