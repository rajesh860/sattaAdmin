import React, { useState } from "react";
import AllUserDetail from "../../componets/allUserDetail/AllUserDetail";
import "./styles.scss";
import { Input, Tabs } from "antd";
import PartnerUser from "../../componets/partnerUser";

const AllUser = () => {
  const [totalUser, setTotalUser] = useState("");
  const [serchvalue, setSerchvalue] = useState("");

  const searchHandleChange = (e) => {
    setSerchvalue(e.target.value);
  };

  const onChange = (key) => {
    console.log(key);
  };
  const tabsItem = [
    {
      label: `Candy User`,
      key: 1,
      children: (
        <AllUserDetail setTotalUser={setTotalUser} serchvalue={serchvalue} />
      ),
    },
    {
      label: `Partner User`,
      key: 2,
      children: <PartnerUser />,
    },
  ];
  return (
    <div className="alluser-div">
      <div className="heading-all-user">
        <h1>All USER DETAIL</h1>
        <p>Total user:{totalUser}</p>
      </div>
      <div className="search-all-user">
        <Input placeholder="search...." onChange={searchHandleChange} />
      </div>
      <Tabs onChange={onChange} type="card" items={tabsItem} />
    </div>
  );
};

export default AllUser;
