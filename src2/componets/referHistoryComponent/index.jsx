import { Table } from "antd";
import React from "react";

const ReferHistory = ({ data }) => {
  const dataSource = data.map((curElm) => {
    return {
      key: "1",
      Date: curElm?.date,
      Time: curElm.time,
      Receiver: curElm?.receiver,
      rewar: (
        <span className="blink" style={{ color: "green" }}>
          +100
        </span>
      ),
    };
  });

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Time",
      dataIndex: "Time",
      key: "Time",
    },
    {
      title: "Refer To",
      dataIndex: "Receiver",
      key: "Receiver",
    },
    {
      title: "",
      dataIndex: "rewar",
      key: "rewar",
    },
  ];
  return (
    <div>
      <h2>Refer History</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        // style={{ width: "100%" }}
      />
    </div>
  );
};

export default ReferHistory;
