import { Button } from "antd";
import React from "react";

const AreYourSure = ({ fun, name }) => {
  return (
    <div>
      <p
        style={{
          fontSize: "22px",
          marginBottom: "0px",
          marginTop: "0px",
        }}
      >
        {name}
      </p>
      <p>Are You Sure You Want to Continue</p>
      <p>
        <Button
          style={{ background: "orange", color: "white", border: "none" }}
          onClick={fun}
          className="button-17"
        >
          Continue
        </Button>
      </p>
    </div>
  );
};

export default AreYourSure;
