import { Table } from "antd";
import React from "react";

const UserDeatilList = ({ data, gameValue }) => {
  const userList = data[gameValue];
  const dataSource = userList.map((res, index) => {
    return {
      key: res.User + res.Name + index,
      name: res?.Name,
      Number: res.User,
    };
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Number",
      dataIndex: "Number",
      key: "Number",
    },
  ];

  if (gameValue) {
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
};

export default UserDeatilList;
