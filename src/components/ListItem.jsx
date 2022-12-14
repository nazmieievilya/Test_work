import React from "react";
import "./ListItem.css";
import { useRef } from "react";
import DropDown from "./DropDown.jsx";

const ListItem = ({
  itemData,
  setList,
  list,
  setSelect,
  select,
  currentItem,
}) => {
  const productName = useRef();
  const id = itemData.id;
  // const currentItem = list.map((item) => {
  //   if (item.id === id) return item;
  // })[0];

  function setIcon(src) {
    if (src) console.log(src);
  }
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
    const currentItem = list.map((item) => {
      if (item.id == e.target.closest(".list-item").dataset.id) return item;
    })[0];
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

    setSelect(Array.from(new Set(list.map((item) => item.name))));
    console.log(list);
    e.target.blur();
  }
  function changeName(e) {
    const id = e.target.closest(".list-item").dataset.id;
    // console.log(id);
  }

  function handleSelection(e) {
    if (
      e.target.classList.contains("btn-remove-item") ||
      e.target.classList.contains("list-img")
    )
      return;
    const id = e.target.closest(".list-item").dataset.id;
    console.log(e.target);
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.isSelected = !item.isSelected;
          return item;
        }
        return item;
      })
    );
  }
  function handleRemoveItem(e) {
    const id = e.target.closest(".list-item").dataset.id;
    setList(list.filter((item) => item.id !== id));

    setSelect(Array.from(new Set(list.map((item) => item.name))));
    // console.log(select);
  }
  return (
    <li
      onClick={handleSelection}
      data-id={itemData.id}
      className={
        !itemData.isSelected ? "list-item" : "list-item list-item-selected"
      }
      style={{ opacity: itemData.isMutable ? 1 : 0.8 }}
    >
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
        placeholder={itemData.productId}
        maxLength="3"
      />
      <div className="product-name">
        <DropDown
          setList={setList}
          list={list}
          setIcon={setIcon}
          currentItem={currentItem}
        />

        <div className="img-conteiner">
          {itemData.icon ? <img src={itemData.icon.src} /> : null}
        </div>
        <input
          ref={productName}
          className="input-product-feild"
          onKeyPress={submitName}
          onChange={changingName}
          placeholder={itemData.name}
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
