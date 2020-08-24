import React from "react";
import "./App.css";
//import { logo } from "/assets/logo.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import homePage from './pages/homePage';
import productDetails from './pages/productDetails'
import cartPage from './pages/CartPage'
import {useSelector} from 'react-redux'

function openSideBarMenue() {
  document.querySelector(".side-bar-window").classList.add("open");
}
function closeSideBarMenue() {
  document.querySelector(".side-bar-window").classList.remove("open");
}
function App() {
  let itemList = []
  const {cartItems} = useSelector(state => state.cart)
  itemList = [...itemList,cartItems]
  console.log(cartItems)
  return (
    <Router>
    <div className="home-page">
      <header className="home-page-header">
        <div>
          <button className="side-bar-btn" onClick={openSideBarMenue}>
            <i className="fas fa-bars sideBar-icon"></i>
          </button>
          <Link className="hover" id="brand-name" to="/">mazon</Link>
        </div>
        <div>
          <ul>
            <li className="hover">Acount</li>
            <li className="hover">Orders</li>
  <li className="hover"><Link className="hover" id="cart-icon" to="/cart"><i className="fas fa-shopping-cart"></i><span className="cart-info">{itemList.length}</span></Link></li>
          </ul>
        </div>
      </header>
      <aside className="side-bar-window">
        <span>
          <button className="side-bar-close-btn" onClick={closeSideBarMenue}>
            <i className="fas fa-times side-bar-close-icon"></i>
          </button>
        </span>
        <ul>
          <h5>SHOP BY CATEGORY</h5>
          <li>
            <a>Kitchen</a>
          </li>
          <li>
            <a>Living room</a>
          </li>
          <li>
            <a>Bed room</a>
          </li>
        </ul>
      </aside>
      <main className="home-page-main">
        <div>
        <Switch>
          <Route exact path="/" component={homePage}></Route>
          <Route path="/products/:id" component={productDetails}></Route>
          <Route path="/cart" component={cartPage}></Route>
        </Switch>
        </div>
      </main>
      <footer className="home-page-footer"></footer>
    </div>
    </Router>
  );
}

export default App;
