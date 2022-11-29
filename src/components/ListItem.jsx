import React from "react";
import "./ListItem.css";
import logo from "../content/KyivS.png";

const ListItem = () => {
  return (
    // <li className="list-item">
    //   <div className="toggle-button-container">
    //     <div className="toggle-button"></div>
    //   </div>
    //   <p className="product">XXX-</p>
    //   <p className="id">1234</p>
    //   <div className="product-name">
    //     <img src="" alt="logo" />
    //     <input type="text" />
    //   </div>
    // </li>
    <li className="list-item">
      <div className="toggle-button-container">
        <div className="toggle-button"></div>
      </div>
      <p className="product">XXX-</p>
      <p className="id">1234</p>
      <div className="product-name">
        <img className="list-img" src={logo} alt="logo" />
        <input className="input-product-feild" type="text" />
        <button className="btn-remove-item">X</button>
      </div>
    </li>
  );
};

export default ListItem;
