import React from "react";
import ViewTransactionCollapse from "../../componets/viewTransactionCollapse/ViewTransactionCollapse";
import "./styles.scss";
const UserTransaction = () => {
  return (
    <div className="user-transaction-div">
      <h1>User Transaction</h1>
      <ViewTransactionCollapse />
    </div>
  );
};

export default UserTransaction;
