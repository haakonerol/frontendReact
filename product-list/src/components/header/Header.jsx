import React from "react";
import HeaderStyle from "./Header.module.scss";

const Header = ({ categories, text }) => {
  return (
    <div className={HeaderStyle.header}>
      <h1>{text}</h1>
      <div className={HeaderStyle.btns}>
        {categories.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
