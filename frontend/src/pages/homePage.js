import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Form,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import ProductList from "../components/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../reducers/product/productActions";


function HomePage(props) {
  const { loading, error, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <div className="home-page-search-bar-container">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for items"
            className="mr-sm-2"
          />
          <Button className="home-page-search-btn">Search</Button>
        </Form>
        <DropdownButton id="dropdown-basic-button" title="Sort by">
          <Dropdown.Item href="#/action-2">price: Low to hight</Dropdown.Item>
          <Dropdown.Item href="#/action-3">price: hight to low</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Avg. customer reviews</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>{loading && <p className="alert alert-light">is loading</p>}</div>
      <div>
        {error && (
          <p className="alert alert-danger">
            sorry there is an error! Try again later
          </p>
        )}
      </div>
      <div>
        {!error && products.length !== 0 && <ProductList products={products} />}
      </div>
    </div>
  );
}

export default HomePage;
