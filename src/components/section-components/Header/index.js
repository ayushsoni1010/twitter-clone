import React from "react";
import "./style.header.css";

export default function Header(__headerProperties) {
  if (!__headerProperties.title) {
    return (
      <div className="header-input-icon-properties">
        <label>
          <i className={__headerProperties.startIconInput}></i>
          <input type="text" placeholder="Search Twitter"/>
        </label>
        <button><i className={__headerProperties.lastIconInput}></i></button>
      </div>
    )
  }
  else if (!__headerProperties.lastSecondIcon && !__headerProperties.imageIcon) {
    return (
      <div className="header-title-sinlge-icon-properties">
        <h2>{__headerProperties.title}</h2>
        <button><i className={__headerProperties.lastFirstIcon}></i></button>
      </div>
    )
  }
  else if(!__headerProperties.imageIcon) {
    return (
      <div className="header-title-icon-properties">
        <h2>{__headerProperties.title}</h2>
        <button><i className={__headerProperties.lastFirstIcon}></i></button>
        <button><i className={__headerProperties.lastSecondIcon}></i></button>
      </div>
    )
  }
  else {
    return (
      <div className="header-title-imageIcon-properties">
        <h2>{__headerProperties.title}</h2>
        <img src={__headerProperties.imageIcon} alt="icon"/>
      </div>
    )
  }
}
