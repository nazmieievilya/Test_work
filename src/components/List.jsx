import React from "react";
import "./List.css";
import ListItem from "./ListItem.jsx";

const List = ({ list, setList }) => {
  return (
    <ul className="list">
      {list.map((item) => (
        <ListItem key={item.id} itemData={item} list={list} setList={setList} />
      ))}
    </ul>
  );
};

export default List;
