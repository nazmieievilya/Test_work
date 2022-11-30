import React from "react";
import "./ListItem.css";
import logo from "../content/KyivS.png";
import { useRef } from "react";

const ListItem = ({ itemData, setList, list }) => {
  const productName = useRef();
  const id = itemData.id;
  const currentItem = list.map((item) => {
    if (item.id === id) return item;
  })[0];
  function isAllowed() {
    return list.map((item) => {
      if (item.id === id && item.isMutable) return true;
      return false;
    })[0];
  }

  function toggleMutability() {
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.isMutable = !item.isMutable;
          return item;
        }
        return item;
      })
    );

    console.log(isAllowed());
  }
  function changingId(e) {
    if (!isAllowed()) e.target.value = currentItem.productId;
  }
  function changingName(e) {
    if (!isAllowed()) e.target.value = currentItem.name;
  }
  function submitId(e) {
    if (!isAllowed()) return;
    if (e.key !== "Enter") return;
    const newList = list.map((item) => {
      if (item.id === id) {
        item.productId = e.target.value;
        return item;
      }
      return item;
    });
    setList(newList);
    e.target.blur();
    productName.current.focus();
  }
  function submitName(e) {
    if (e.key !== "Enter") return;
    const newList = list.map((item) => {
      if (item.id === id) {
        item.name = e.target.value;
        return item;
      }
      return item;
    });
    setList(newList);
    console.log(list);
    e.target.blur();
  }
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
        onClick={toggleMutability}
        className={
          itemData.isMutable
            ? "toggle-button-container"
            : "toggle-button-container toggle-on"
        }
      >
        <div className="toggle-button"></div>
      </div>
      <p className="product">XXX-</p>
      <input
        className="id"
        onKeyPress={submitId}
        onChange={changingId}
        autoFocus
        maxLength="3"
      />
      <div className="product-name">
        <img className="list-img" src={logo} alt="logo" />
        <input
          ref={productName}
          className="input-product-feild"
          onKeyPress={submitName}
          onChange={changingName}
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
