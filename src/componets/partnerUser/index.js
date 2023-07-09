import React, { useEffect, useState } from "react";
import { subAdminListAction } from "../../redux/action/subAdminListAction";
import { Button, Select, Switch, Table } from "antd";
import { partnerUserTodos, subAdminTodos } from "../../redux/selector/Selector";
import { blockAdminAction } from "../../redux/action/blockAdmin";
import { useDispatch, useSelector } from "react-redux";
import { partnerUser } from "../../redux/action/partnerUserAction";
import { columns, getcolumns } from "./tableColumn";
import {
  view_Transaction,
  view_User_Game_Data,
} from "../../routes/pagesRoutes";
import { Link } from "react-router-dom";

const PartnerUser = () => {
  const [optionValue, setOptionValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(subAdminListAction());
  }, []);
  useEffect(() => {
    dispatch(partnerUser({ unic: optionValue }));
  }, [optionValue]);
  const partnerDataList = useSelector(partnerUserTodos);
  const partnerData = partnerDataList?.data?.data;

  const getAdminDataList = useSelector(subAdminTodos);
  const data = getAdminDataList?.data?.data;
  const blockAdmin = () => {
    dispatch(blockAdminAction());
  };
  const dataSource = partnerData?.map((curElm, index) => {
    return {
      key: curElm.name + curElm.phone + index,
      name: curElm.name,
      phone: curElm.phone,
      WalletAmount: curElm.WalletAmount,
      Action: (
        <div className="action-div">
          <Link to={`${view_Transaction}${curElm.phone}`}>
            <Button>View Transaction</Button>
          </Link>
          <Link to={`${view_User_Game_Data}${curElm.phone}`}>
            <Button>View Game Detail</Button>
          </Link>
        </div>
      ),
    };
  });

  const handleChange = (value) => {
    setOptionValue(value);
  };
  const option = data?.map((curElm) => {
    return {
      value: curElm.upicid,
      label: curElm.Name,
    };
  });

  return (
    <div>
      <Select
        defaultValue="Select User "
        style={{
          width: 220,
        }}
        onChange={handleChange}
        options={option}
      />
      {dataSource && <Table dataSource={dataSource} columns={getcolumns} />}

      {/* <PaidMoneyComponent /> */}
    </div>
  );
};

export default PartnerUser;
