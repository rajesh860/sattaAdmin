import { Table } from "antd";
import React from "react";

const WinningHistoryComponent = ({ data }) => {
  const dataSource = data?.data?.winnerlist?.map((curElm) => {
    return {
      key: "1",
      GameName: curElm?.GameName,
      date: curElm?.date,
      user: curElm?.user,
      Amount: curElm?.Amount,
    };
  });

  const columns = [
    {
      title: "GameName",
      dataIndex: "GameName",
      key: "GameName",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "user",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
  ];
  return (
    <div>
      <h2>Winning History</h2>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default WinningHistoryComponent;
