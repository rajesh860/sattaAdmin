import React, { useEffect } from "react";
import { Collapse, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { monthResultData } from "../../redux/action/monthResult/MonthResult";
import { manthResultTodos } from "../../redux/selector/Selector";
import { useParams } from "react-router-dom";

const MonthResultDataTable = ({ date }) => {
  const { Panel } = Collapse;
 

  // const dataSource = tabledata?.map((res) => {
  //   return {
  //     key: res.Date + res.Result + res.id,
  //     date: res.Date,
  //     number: res.Result,
  //   };
  // });

  const columns = [
    {
      title: "date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "number",
      dataIndex: "number",
      key: "number",
    },
  ];
  // const obj = {
  //   id: id,
  // };

  return (
    <div>
      <h1
        style={{
          width: "100%",
          background: "#87593d",
          padding: "20px 0px 20px 5px",
          color: "white",
          borderRadius: "5px",
          // marginTop: "10px",
        }}
      >
        Month Result
      </h1>
      <Collapse
        defaultActiveKey={["jodi", "Haruf_Andar", "Haruf_Bahar"]}
        // onChange={onChange}
      >
        <Panel key="jodi" className="game-panel">
          {/* <Table dataSource={dataSource} columns={columns} pagination={false} /> */}
        </Panel>
      </Collapse>
    </div>
  );
};

export default MonthResultDataTable;
