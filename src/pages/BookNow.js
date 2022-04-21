import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem2 from "../components/MenuItem2";
import "../styles/BookNow.css";

function BookNow() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem2
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />  
          );
        })}
      </div>
    </div>
  );
}

export default BookNow;
