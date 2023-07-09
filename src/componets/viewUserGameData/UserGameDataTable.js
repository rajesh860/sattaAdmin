import { Table } from "antd";
import { columns } from "./UserGameTableColum";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { usergameDataTodos } from "../../redux/selector/Selector";
import { userGameDataAction } from "../../redux/action/userGameDataAction/UserGameDataAction";
const UserGameDataTable = () => {
  const [page, setpage] = useState(1);
  let { userId } = useParams();

  const dispatch = useDispatch();
  const payloadData = {
    id: userId,
    page: page,
  };
  
  useEffect(() => {
    dispatch(userGameDataAction(payloadData));
  }, [page]);

  const data = useSelector(usergameDataTodos);
  const userGameData = data?.data?.data;
  const pageSizeData = data?.data?.count;
  const dataSource = userGameData?.map((curElm) => {
    return {
      key: curElm.Game_Name + curElm.number + curElm.Amount + curElm.date,
      Game_Name: curElm.Game_Name,
      game: curElm.game,
      number: curElm.number,
      date: curElm.date,
      Amount: curElm.Amount,
    };
  });

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          current: page,
          pageSize: pageSizeData,
          onChange: (page) => {
            setpage(page);
          },
        }}
      />
    </div>
  );
};

export default UserGameDataTable;
