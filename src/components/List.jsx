import React from "react";
import "./List.css";
import ListItem from "./ListItem.jsx";

const List = ({ list, setList, setSelect, select, selected }) => {
  // console.log(list);
  return (
    <ul className="list">
      {selected.length === 0
        ? list.map((item) => (
            <ListItem
              key={item.id}
              currentItem={item}
              setSelect={setSelect}
              select={select}
              itemData={item}
              list={list}
              setList={setList}
            />
          ))
        : list
            .filter(function (element) {
              return selected.includes(element.name);
            })
            .map((item) => {
              return (
                <ListItem
                  key={item.id}
                  currentItem={item}
                  setSelect={setSelect}
                  select={select}
                  itemData={item}
                  list={list}
                  setList={setList}
                />
              );
            })}
    </ul>
  );
};

export default List;
