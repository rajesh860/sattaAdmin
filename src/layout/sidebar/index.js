import Sider from "antd/es/layout/Sider";
import React from "react";
import { Avatar, Menu } from "antd";
import { item } from "./Siderdata";
// Styles
import "../styles.scss";
const name = localStorage.getItem("userName");
const AppSidebar = () => {
  return (
    <>
      <Sider className="app-sidebar">
        <Menu
          // defaultOpenKeys={[""]}
          // defaultSelectedKeys={[""]}
          mode="inline"
          items={item}
        ></Menu>
        {/* <div className="user-name">
          <Avatar size="large" style={{ background: "green", color: "white" }}>
            {name && Array.from(name)[0]}
          </Avatar>
          <h2>{name}</h2>
        </div> */}
      </Sider>
    </>
  );
};

export default AppSidebar;
