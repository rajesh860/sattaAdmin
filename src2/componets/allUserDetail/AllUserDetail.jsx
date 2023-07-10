import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alluserDetailAction } from "../../redux/action/allUserDetailAction/AllUserDetailAction";
import { allUserTodos } from "../../redux/selector/Selector";
// import { columns } from "./TableColumn";
///styles
import "./styles.scss";
import { Link } from "react-router-dom";

import { getcolumns } from "./TableColumn";
const AllUserDetail = ({ setTotalUser, serchvalue }) => {
  const [page, setpage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(alluserDetailAction(page));
  }, [page]);

  const data = useSelector(allUserTodos);
  const userData = data?.data?.data;
  const pageSizeData = data?.data?.count;
  setTotalUser(pageSizeData);
  const dataSource = userData?.map((curElm, index) => {
    return {
      key: curElm.name + curElm.phone + index,
      name: (
        <Link to={`/user-deatil/${curElm?.phone}`} style={{ color: "black" }}>
          {curElm?.name}
        </Link>
      ),
      phone: curElm.phone,
      WalletAmount: curElm.WalletAmount,
      // Action: (
      //   <div className="action-div">
      //     <Link to={`${view_Transaction}${curElm.phone}`}>
      //       <Button className="button-17">View Transaction</Button>
      //     </Link>
      //     <Link to={`${view_User_Game_Data}${curElm.phone}`}>
      //       <Button className="button-17">View Game Detail</Button>
      //     </Link>
      //   </div>
      // ),
    };
  });

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={getcolumns(serchvalue)}
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

export default AllUserDetail;
