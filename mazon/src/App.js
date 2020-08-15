import React from "react";
import "./App.css";
import { logo } from "./assets/logo.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import productDetails from './pages/ProductDetails'

function openSideBarMenue() {
  document.querySelector(".side-bar-window").classList.add("open");
}
function closeSideBarMenue() {
  document.querySelector(".side-bar-window").classList.remove("open");
}
function App() {
  return (
    <Router>
    <div className="home-page">
      <header className="home-page-header">
        <div>
          <button className="side-bar-btn" onClick={openSideBarMenue}>
            <i className="fas fa-bars sideBar-icon"></i>
          </button>
          <a>mazon</a>
        </div>
        <div>
          <ul>
            <li>Acount</li>
            <li>Orders</li>
            <li>Cart</li>
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
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/products/:id" component={productDetails}></Route>
        </Switch>
        </div>
      </main>
      <footer className="home-page-footer"></footer>
    </div>
    </Router>
  );
}

export default App;
