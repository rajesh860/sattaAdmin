import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paidMoneyTodos } from "../../redux/selector/Selector";
import { PaidMoneyAction } from "../../redux/action/paidMoneyAction/PaidMoneyAction";
import { columns } from "./TableColumn";

const PaidMoneyComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PaidMoneyAction());
  }, []);

  const todos = useSelector(paidMoneyTodos);
  const data = todos?.data?.data;
  const dataSource = data?.map((res) => {
    return {
      key: res.user + res.Amount + res.id,
      user: res.User,
      date: res.Date,
      time: res.Time,
      Amount: res.Amount,
    };
  });

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        summary={(pageData) => {
          let totalBorrow = 0;

          pageData?.forEach(({ Amount }) => {
            totalBorrow += Number(Amount);
          });
          return (
            <>
              <Table.Summary.Row style={{ background: "rgb(211, 211, 211)" }}>
                <Table.Summary.Cell index={0}>Total Paid</Table.Summary.Cell>
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
export default PaidMoneyComponent;
