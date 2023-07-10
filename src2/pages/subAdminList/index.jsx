import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subAdminListAction } from "../../redux/action/subAdminListAction";
import { Button, Switch, Table } from "antd";
import { subAdminTodos } from "../../redux/selector/Selector";
import { blockAdminAction } from "../../redux/action/blockAdmin";

const SubAdminList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(subAdminListAction());
  }, []);
  const getAdminDataList = useSelector(subAdminTodos);
  const data = getAdminDataList?.data?.data;
  const blockAdmin = () => {
    dispatch(blockAdminAction());
  };
  const dataSource = data?.map((curElm) => {
    return {
      key: "Name",
      Name: curElm.Name,
      Password: curElm.Password,
      Phone: curElm.Phone,
      CreatedBy: curElm.CreatedBy,
      SubscriptionMonthlyBased: (
        <Switch
          disabled
          size="small"
          defaultChecked={
            curElm.SubscriptionMonthlyBased === "1" ? true : false
          }
        />
      ),
      SubscriptionYearlyBased: (
        <Switch
          size="small"
          disabled
          defaultChecked={curElm.SubscriptionYearlyBased === "1" ? true : false}
        />
      ),
      UserType: curElm.UserType === "1" ? "SubAdmin" : "Admin",
      upicid: curElm.upicid,
      Action: (
        <Button
          style={{ border: "none", background: "#3076f9", color: "white" }}
          onClick={() =>
            blockAdmin({
              idtype: curElm.UserType === "1" ? "0" : "1",
              id: curElm.id,
            })
          }
        >
          Block
        </Button>
      ),
    };
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Password",
      dataIndex: "Password",
      key: "Password",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
    },
    {
      title: "CreatedBy",
      dataIndex: "CreatedBy",
      key: "CreatedBy",
    },
    {
      title: "SubscriptionMonthlyBased",
      dataIndex: "SubscriptionMonthlyBased",
      key: "SubscriptionMonthlyBased",
    },
    {
      title: "SubscriptionYearlyBased",
      dataIndex: "SubscriptionYearlyBased",
      key: "SubscriptionYearlyBased",
    },
    {
      title: "UserType",
      dataIndex: "UserType",
      key: "UserType",
    },
    {
      title: "upicid",
      dataIndex: "upicid",
      key: "upicid",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
    },
  ];
  return (
    <div>
      <h1 style={{ paddingLeft: "10px", fontSize: "22px" }}>
        All Admin & SubAdmin
      </h1>
      <Table dataSource={dataSource} columns={columns} />;
      {/* <PaidMoneyComponent /> */}
    </div>
  );
};

export default SubAdminList;
