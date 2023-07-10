import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRechargeAmountTodos } from "../../redux/selector/Selector";
import { GetRechargeAmountAction } from "../../redux/action/getReachargeAmountAction/GetRechargeAmountAction";
import TypedInputNumber from "antd/es/input-number";

const GetRechargeAmount = () => {
  const [page, setPage] = useState();
  const [pageSize, setPageSize] = useState();

  const { Text } = TypedInputNumber;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetRechargeAmountAction());
  }, []);

  const todos = useSelector(getRechargeAmountTodos);
  const data = todos?.data?.data;
  const dataSource = data?.map((res) => {
    return {
      key: res.user + res.Amount + res.id,
      user: res.user,
      date: res.date,
      time: res.time,
      Amount: res.Amount,
    };
  });

  const columns = [
    {
      title: "user",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          current: page,
          pageSize: pageSize,
          total: 100,
          onChange: (page, pageSize) => {
            setPageSize(pageSize);
            setPage(page);
          },
        }}
        summary={(pageData) => {
          let totalBorrow = 0;

          pageData.forEach(({ Amount }) => {
            totalBorrow += Number(Amount);
          });
          return (
            <>
              <Table.Summary.Row style={{ background: "rgb(211, 211, 211)" }}>
                <Table.Summary.Cell index={0}>
                  Total Received
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3}></Table.Summary.Cell>
                <Table.Summary.Cell index={3}></Table.Summary.Cell>
                <Table.Summary.Cell index={3}>{totalBorrow}</Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </div>
  );
};

export default GetRechargeAmount;
