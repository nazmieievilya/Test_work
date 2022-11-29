import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ListItem from "./components/ListItem.jsx";
import Control from "./components/Control.jsx";
function App() {
  const [state, setState] = useState(0);

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

      <Control />

      <ul className="list">
        <ListItem />
      </ul>
    </div>
  );
}

export default App;
