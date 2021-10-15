import React from "react";
import "./style.button.primaryButton.css";
// import logo from '../../../../assets/logoIcon.png';

export default function PrimaryButton(__buttonProperties) {
  if (!__buttonProperties.startIcon && !__buttonProperties.imageIcon) {
    return (
      <button className="button-properties" type="button">
        {__buttonProperties.value}
      </button>
    );
  } else if (!__buttonProperties.value && !__buttonProperties.imageIcon) {
    return (
      <button className="button-only-icon-properties">
        <i className={__buttonProperties.startIcon}></i>
      </button>
    );
  } else if (!__buttonProperties.imageIcon) {
    return (
      <button className="button-icon-properties" type="button">
        <i className={__buttonProperties.startIcon}></i>
        {__buttonProperties.value}
      </button>
    );
  } else {
    return (
      <button className="button-image-icon-properties" type="button">
        <img src={__buttonProperties.imageIcon} alt="Icon"/>{__buttonProperties.value}
      </button>
    );
  }
}
