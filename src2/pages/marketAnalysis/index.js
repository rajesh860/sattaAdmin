import React from "react";
// Styles
import "./styles.scss";
import RowData from "../../componets/rowData";
const MarketAnalysis = () => {
  return (
    <>
      <div className="container">
        <h1 style={{ paddingLeft: "10px", fontSize: "22px", marginTop: "0px" }}>
          Game Analysis
        </h1>
        <RowData btnProps={"marketAnaylsis"} />
      </div>
    </>
  );
};

export default MarketAnalysis;
