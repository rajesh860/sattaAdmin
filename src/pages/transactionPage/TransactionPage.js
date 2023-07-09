import React from "react";
import GetRechargeAmount from "../../componets/getRechargeAmountCom/GetRechargeAmount";

const TransactionPage = () => {
  return (
    <div>
      <h1 style={{ paddingLeft: "10px", fontSize: "22px" }}>Received Money</h1>
      <GetRechargeAmount />
    </div>
  );
};

export default TransactionPage;
