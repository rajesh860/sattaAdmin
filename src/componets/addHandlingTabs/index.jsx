import { Tabs } from "antd";
import React from "react";
import AddHandlingType from "./AddHandlingType";
import AddSubscription from "./AddSubscription";
import AddCommission from "./AddCommission";

const AddHandlingTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Add Handling Type`,
      children: <AddHandlingType />,
    },
    {
      key: "2",
      label: `Add Subcription`,
      children: <AddSubscription />,
    },
    {
      key: "3",
      label: `Add Comissions`,
      children: <AddCommission />,
    },
  ];
  return (
    <>
      <Tabs
        type="card"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </>
  );
};

export default AddHandlingTabs;
