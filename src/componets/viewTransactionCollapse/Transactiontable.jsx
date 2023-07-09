import { Table } from "antd";
import React from "react";
import { columns } from "./TableColumn";

const Transactiontable = ({ transactionData }) => {
  const dataSource = transactionData?.map((curElm) => {
    console.log(curElm);
    return {
      key: "1",
      User: curElm.User,
      Time: curElm.Time,
      Date: curElm.Date,
      Amount: curElm.Amount,
      AccountUPI: curElm.Amount,
    };
  });

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default Transactiontable;
