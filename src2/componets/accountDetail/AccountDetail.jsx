import { Table } from "antd";
import React from "react";

const AccountDetail = ({ data }) => {
  const dataSource = [
    {
      key: data?.Date + data?.Time + data?.User,
      BankHolderName: data?.BankHolderName,
      UPID: data?.UPIID,
      BankName: data?.BankName,
      AccountNumber: data?.AccountNumber,
      IFSC: data?.IFSC,
    },
  ];

  const columns = [
    {
      title: "BankHolderName",
      dataIndex: "BankHolderName",
      key: "BankHolderName",
    },
    {
      title: "UPID",
      dataIndex: "UPID",
      key: "UPID",
    },
    {
      title: "BankName",
      dataIndex: "BankName",
      key: "BankName",
    },
    {
      title: "AccountNumber",
      dataIndex: "AccountNumber",
      key: "AccountNumber",
    },
    {
      title: "IFSC",
      dataIndex: "IFSC",
      key: "IFSC",
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default AccountDetail;
