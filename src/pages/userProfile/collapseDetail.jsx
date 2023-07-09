import { Collapse, Table } from "antd";
import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
const CollapseDetail = ({
  data,
  GameName,
  winningData,
  no,
  panelName,
  WinningGameName,
}) => {
  const { Panel } = Collapse;
  const dataObj = {
    0: data,
    1: winningData,
  };
  const dataSource = dataObj[no]?.map((curElm, index) => {
    return {
      key: "1",
      date: curElm?.date,
      time: no == 0 ? curElm?.time : no == 1 ? "" : "",
      GameName:
        no == 0 ? GameName[index] : no == 1 ? WinningGameName[index] : "",
      game: no == 0 ? curElm?.Game_Name : no == 1 ? curElm.GameName : "",
      Amount:
        no == 0 ? (
          <p style={{ color: "red" }}>
            -{curElm?.Amount}
            <MdOutlineCurrencyRupee />
          </p>
        ) : no == 1 ? (
          <p style={{ color: "green" }}>
            +{curElm?.Amount}
            <MdOutlineCurrencyRupee />
          </p>
        ) : (
          ""
        ),
    };
  });

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: no == 0 ? "time" : no == 1 ? "" : "",
      dataIndex: "time",
      key: "time",
    },

    {
      title: "Game Name",
      dataIndex: "GameName",
      key: "GameName",
    },
    {
      title: "Game",
      dataIndex: "game",
      key: "game",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
  ];
  return (
    <div style={{ marginTop: "20px" }}>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header={panelName} key="1">
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Panel>
      </Collapse>
    </div>
  );
};

export default CollapseDetail;
