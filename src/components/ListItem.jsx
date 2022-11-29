import React from "react";
import "./ListItem.css";
import logo from "../content/KyivS.png";
import { useRef } from "react";

const ListItem = ({ itemData, setList, list }) => {
  function changeName(e) {
    const id = e.target.closest(".list-item").dataset.id;
    console.log(id);
  }
  function handleRemoveItem(e) {
    const id = e.target.closest(".list-item").dataset.id;
    setList(list.filter((item) => item.id !== id));
  }
  return (
    <li data-id={itemData.id} className="list-item">
      <div
        className={
          itemData.isMutable
            ? "toggle-button-container"
            : "toggle-button-container toggle-on"
        }
      >
        <div className="toggle-button"></div>
      </div>
      <p className="product">XXX-</p>
      <p className="id">{itemData.id}</p>
      <div className="product-name">
        <img className="list-img" src={logo} alt="logo" />
        <input
          value={itemData.name}
          onChange={changeName}
          className="input-product-feild"
          type="text"
        />
        <button onClick={handleRemoveItem} className="btn-remove-item">
          X
        </button>
      </div>
    </li>
  );
};

export default ListItem;
