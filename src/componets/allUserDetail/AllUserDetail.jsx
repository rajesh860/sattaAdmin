import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alluserDetailAction } from "../../redux/action/allUserDetailAction/AllUserDetailAction";
import { allUserTodos } from "../../redux/selector/Selector";
// import { Pagination } from 'antd';
// import { columns } from "./TableColumn";
///styles
import "./styles.scss";
import { Link } from "react-router-dom";
import {
  view_Transaction,
  view_User_Game_Data,
} from "../../routes/pagesRoutes";
import { getcolumns } from "./TableColumn";
import Pagination from "../pagination/Pagination";

const AllUserDetail = ({ setTotalUser, serchvalue }) => {
  const [page, setpage] = useState(1);

  const [change, setChange] = useState(1);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(alluserDetailAction(change));
  }, [change]);



  // const paginationProps = (e) => {
  //   setNext(e);
  // }

  const data = useSelector(allUserTodos);
  const userData = data?.data?.data;
  // const pageNext = data?.data?.next;
  const pageSizeData = data?.data?.count;
  setTotalUser(pageSizeData);
  const dataSource = userData?.map((curElm, index) => {
    return {
      key: curElm.name + curElm.phone + index,
      name: curElm.name,
      phone: curElm.phone,
      WalletAmount: curElm.WalletAmount,
      Action: (
        <div className="action-div">
          <Link to={`${view_Transaction}${curElm.phone}`}>
            <Button className="button-17">View Transaction</Button>
          </Link>
          <Link to={`${view_User_Game_Data}${curElm.phone}`}>
            <Button className="button-17">View Game Detail</Button>
          </Link>
        </div>
      ),
    };
  });

  const previous = () => {
    if (change === 1) {
      return;
    } else {
      setChange(change - 1);
    }
  }

  const next = () => {
    if (userData == null) {
      return;
    } else {
      setChange(change + 1);
    }
  }
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={getcolumns(serchvalue)}
        pagination={false}
      // pagination={{
      //   current: page,
      //   pageSize: 62,
      //   onChange: (page) => {
      //     setpage(page);
      //   },
      // }}
      />
      {/* <Pagination onChange={(e) => { pageNext == null || pageNext == undefined ? '' : paginationProps(e) }} defaultCurrent={next} total={50} />; */}


      <Pagination previous={previous} next={next} change={change} />
    </div >
  );
};

export default AllUserDetail;
