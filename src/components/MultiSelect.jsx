import React from "react";
import { useRef, useState } from "react";

import "./Multiselect.css";
const MultiSelect = ({ list, selected, setSelected }) => {
  const [searchRes, setSearchRes] = useState([]);
  const inputFeildRef = useRef();
  function searchForName() {
    setSearchRes([]);
    const value = inputFeildRef.current.value;
    const searchResult = [];
    list.forEach((item) => {
      if (item.name.includes(value)) return searchResult.push(item.name);
    });
    setSearchRes(searchResult);
  }
  function handleSelection(e) {
    const item = e.target.closest(".list-item-multiselect").dataset.item;
    if (selected.includes(item)) return removeSelection(item);
    addSelection(item);
  }
  function addSelection(itemToAdd) {
    setSelected([...selected, itemToAdd]);
    console.log(selected);
  }
  function removeSelection(itemToRemove) {
    setSelected(selected.filter((item) => item != itemToRemove));
    console.log(selected);
  }
  return (
    <div className="multiselect-container">
      <input
        ref={inputFeildRef}
        onChange={searchForName}
        style={{ width: "100%" }}
        type="text"
      />
      <div className="selected-list">
        {/* search */}
        <div onClick={() => setSelected([])} className="list-item-multiselect">
          <div
            className={
              selected.length === 0
                ? "list-item-dot selected"
                : "list-item-dot "
            }
          ></div>
          <p>Все</p>
        </div>
        {searchRes
          ? searchRes.map((res, i) => (
              <div
                key={i}
                data-item={res}
                onClick={handleSelection}
                className="list-item-multiselect"
              >
                <div
                  className={
                    selected.includes(res)
                      ? "list-item-dot selected"
                      : "list-item-dot"
                  }
                ></div>{" "}
                <p>{res}</p>
              </div>
            ))
          : null}
        {/* selected */}

        {/* <div className="list-item-multiselect">
          <div className="list-item-dot"></div> <p>Item</p>
        </div>
        <div className="list-item-multiselect">
          <div className="list-item-dot"></div> <p>Item</p>
        </div>
        <div className="list-item-multiselect">
          <div className="list-item-dot"></div> <p>Item</p>
        </div>
        <div className="list-item-multiselect">
          <div className="list-item-dot"></div> <p>Item</p>
        </div> */}
      </div>
    </div>
  );
};

export default MultiSelect;
