import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";
import ListItem from "./components/ListItem.jsx";
import Control from "./components/Control.jsx";
import List from "./components/List.jsx";
import MultiSelect from "./components/MultiSelect.jsx";
import DropDown from "./components/DropDown.jsx";

function App() {
  const [list, setList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [select, setSelect] = useState([]);
  const [selected, setSelected] = useState([]);

  const multiSelect = useRef();
  function selectChange(e) {
    e.preventDefault();
    const elem = document.querySelector(".multiselect");

    if (elem === document.activeElement) console.log("focuse");
  }
  //  { id: 1, name: "Синий", isMutable: true },
  function editId(id) {
    const itemToEdit = list.map((item) => item.id === id);
    console.log(itemToEdit);
  }
  function handleAddItem() {
    if (list.some((item) => item.productId === "")) return;
    const newItem = {
      id: String(Date.now()).slice(10, 13),
      productId: "",
      name: "xxxx",
      isMutable: true,
      isSelected: false,
    };
    const itemId = newItem.id;
    setList([newItem, ...list]);

    setSelect(Array.from(new Set(list.map((item) => item.name))));
    console.log(select);
  }
  function handleRemoveAll() {
    if (list.some((item) => item.isSelected))
      return setList(list.filter((item) => !item.isSelected));
    setList([]);
  }
  // styles
  const multiSelectStyles = {
    chips: {
      background: "none",
      color: "black`",
    },
    searchBox: {
      border: "none",
      borderBottom: "1px solid black",
      borderRadius: "0px",
    },
    multiselectContainer: {
      color: "black",
    },
  };
  return (
    <div className="todoList-container">
      <div className="nav-item">
        <p>Статус</p>
        <select>
          <option></option>
        </select>
      </div>
      <div className="nav-item">
        <p>Товар</p>
        <select>
          <option></option>
        </select>
      </div>
      <div className="nav-item">
        <p>ID</p>
        <select>
          <option></option>
        </select>
      </div>
      <div className="nav-item">
        <p>Название</p>
        <MultiSelect
          list={list}
          selected={selected}
          filteredList={filteredList}
          setfilteredList={setfilteredList}
          setSelected={setSelected}
        />
      </div>

      {/* <select className="nav-item">
        {select.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select> */}

      <Control
        handleAddItem={handleAddItem}
        handleRemoveAll={handleRemoveAll}
      />
      <List
        select={select}
        selected={selected}
        setSelect={setSelect}
        setList={setList}
        list={list}
        filteredList={filteredList}
      />
    </div>
  );
}

export default App;
