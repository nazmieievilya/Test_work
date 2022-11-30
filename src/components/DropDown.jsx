import React from "react";
import amazon from "../content/icons/Amazon.svg";
import autolux from "../content/icons/Autolux.svg";
import delivery from "../content/icons/Delivery.svg";
import ebay from "../content/icons/Ebay.svg";
import fotos from "../content/icons/Fotos.svg";
import joom from "../content/icons/Joom.svg";
import meest from "../content/icons/Meest.svg";
import kasta from "../content/icons/Kasta.svg";
import prom from "../content/icons/Prom.svg";
import rozetka from "../content/icons/Rozetka.svg";
import logistics from "../content/icons/Logistics.svg";
import ups from "../content/icons/UPS.svg";
import life from "../content/icons/Life.svg";
import vector from "../content/icons/Vector.svg";
import kyiv from "../content/icons/Kyiv.svg";
import flag from "../content/icons/flag.svg";

const DropDown = ({ currentItem, setList, list }) => {
  const logosArray = [
    amazon,
    autolux,
    delivery,
    ebay,
    fotos,
    joom,
    meest,
    kasta,
    prom,
    rozetka,
    logistics,
    ups,
    life,
    vector,
    kyiv,
    flag,
  ];
  function iconClickHandler(e) {
    const newList = list.map((item) => {
      if (item === currentItem) {
        const newItem = { ...currentItem };
        newItem.icon = {
          src: e.target.src,
          name: e.target.dataset.value,
        };
        return newItem;
      }
      return item;
    });

    setList(newList);
    console.log(currentItem);
  }

  /// way of retriecing value for data-set

  return (
    <div className="dropdown-container">
      {logosArray.map((img) => (
        <img
          key={img}
          style={{
            opacity:
              currentItem?.icon?.name ===
              String(img).slice(14, img.indexOf("."))
                ? "0.5"
                : "1",
          }}
          className="list-img"
          data-value={String(img).slice(14, img.indexOf("."))}
          onClick={iconClickHandler}
          src={img}
          alt="logo"
        />
      ))}
    </div>
  );
};

export default DropDown;
