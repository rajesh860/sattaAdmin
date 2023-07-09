import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import "./sstyles.scss";
import { useDispatch } from "react-redux";
import { createAdminAction } from "../../../redux/action/createAdmin/CreateAdminAction";
const CreateAdminForm = () => {
  const [showHandling, setshowHandling] = useState("");
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (value) => {
    dispatch(createAdminAction(value));
    form.resetFields();
  };
  const selectRoleHandleChange = (value) => {
    setshowHandling(value);
  };
  return (
    <div className="form-container">
      <div className="form-div">
        <h2>Create Admin</h2>
        <Form
          name="form_item_path"
          layout="vertical"
          onFinish={onFinish}
          form={form}
        >
          <Form.Item name="name" label="Enter name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Enter email">
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Enter phone">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="password" label="Enter password">
            <Input type="password" />
          </Form.Item>
          <Form.Item name="pin" label="Enter Pin">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="User Role" name="usertype">
            <Select
              defaultValue="Select User Role"
              onChange={selectRoleHandleChange}
            >
              <Select.Option value="0">Admin</Select.Option>
              <Select.Option value="1">Sub Admin</Select.Option>
            </Select>
          </Form.Item>
          {showHandling === "1" && (
            <Form.Item label="Handling" name="base">
              <Select defaultValue="Select User Handling">
                <Select.Option value="0">Comission</Select.Option>
                <Select.Option value="1">Monthly Subscription</Select.Option>
                <Select.Option value="2">Year Subscription</Select.Option>
              </Select>
            </Form.Item>
          )}

          <Button type="primary" htmlType="submit" className="button-17">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminForm;
