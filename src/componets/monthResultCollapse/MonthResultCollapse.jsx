import React from "react";
import "./styles.scss";

import MonthDataTabs from "../tabs/MonthDataTabs";
const MonthResultCollapse = () => {
  return (
    <div>
      <h1
        style={{
          width: "100%",
          background: "#87593d",
          padding: "20px 0px 20px 5px",
          color: "white",
          borderRadius: "5px",
          // marginTop: "10px",
        }}
      >
        Month Data
      </h1>
      <MonthDataTabs />
    </div>
  );
};

export default MonthResultCollapse;
