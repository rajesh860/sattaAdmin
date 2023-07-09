import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { updateApplicationAction } from "../../../redux/action/updateApplicationVersion/UpdateApplicationVersionAction";

const UpdateVersion = () => {
  const dispatch = useDispatch();
  const onFinish = (value) => {
    dispatch(updateApplicationAction(value));
  };
  return (
    <div>
      <p style={{ fontSize: "22px", marginBottom: "10px", marginTop: "0px" }}>
        Update Application Version
      </p>
      <Form
        layout="vertical"
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="version" label="Enter Aplication Version">
          <Input placeholder="Enter Aplication Version" />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="button-17">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateVersion;
