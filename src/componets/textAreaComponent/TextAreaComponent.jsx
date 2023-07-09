import React from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
const TextAreaComponent = ({ setTextValue }) => {
  return (
    <>
      <textarea
        cols="30"
        rows="30"
        style={{ width: "100%" }}
        onChange={(e) => setTextValue(e.target.value)}
      ></textarea>
    </>
  );
};

export default TextAreaComponent;
