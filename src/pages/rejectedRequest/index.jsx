import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rejectedRequestTodos } from "../../redux/selector/Selector";
import { rejectedRequest } from "../../redux/action/rejectedRequest";

const RejectedRequest = () => {
  const data = useSelector(rejectedRequestTodos);
  const upiList = data?.data?.data;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rejectedRequest());
  }, []);

  const dataSource = upiList?.map((curElm) => {
    return {
      key: curElm?.User + curElm?.Date + curElm?.time + curElm?.AccountUpi,
      name: curElm.User,
      Date: curElm.Date,
      time: curElm.time,
      message: curElm.message,
      AccountUpi: curElm.AccountUpi,
      Amount: curElm.Amount,
    };
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "AccountUpi",
      dataIndex: "AccountUpi",
      key: "AccountUpi",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
  ];

  return (
    <div className="update-result-container">
      <h1 style={{ paddingLeft: "10px", fontSize: "22px", marginTop: "0px" }}>
        Rejected Request
      </h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default RejectedRequest;
