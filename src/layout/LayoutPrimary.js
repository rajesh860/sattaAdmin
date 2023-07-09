import { Layout } from "antd";
import React from "react";
import AppHeader from "./header";
import AppSidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const LayoutPrimary = () => {
  return (
    <Layout className="layout-main">
      <AppHeader />
      <Layout>
        <AppSidebar />
        <Content className="app-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPrimary;
