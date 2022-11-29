import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ListItem from "./components/ListItem.jsx";
import Control from "./components/Control.jsx";
import List from "./components/List.jsx";
function App() {
  const [list, setList] = useState([]);
  //  { id: 1, name: "Синий", isMutable: true },
  function handleAddItem() {
    setList([
      { id: String(Date.now()).slice(10, 13), name: "xxxx", isMutable: true },
      ...list,
    ]);
  }
  function handleRemoveAll() {
    setList([]);
  }
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
        <select>
          <option></option>
        </select>
      </div>

      <Control
        handleAddItem={handleAddItem}
        handleRemoveAll={handleRemoveAll}
      />
      <List setList={setList} list={list} />
    </div>
  );
}

export default App;
