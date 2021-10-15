import React from "react";
import "./style.button.primaryButton.css";

export default function PrimaryButton(__buttonProperties) {
  if (!__buttonProperties.startIcon) {
    return (
      <button className="button-properties" type="button">
        {__buttonProperties.value}
      </button>
    );
  } else {
    return (
      <button className="button-icon-properties" type="button">
        <i className={__buttonProperties.startIcon}></i>
        {__buttonProperties.value}
      </button>
    );
  }
}
