import { Button, Form, Input } from "antd";
import React from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../redux/action/signIn/SignIn";
import { signInTodos } from "../../../redux/selector/Selector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onFinish = (value) => {
    localStorage.setItem("email", value?.email);
    dispatch(signInAction(value));
  };
  const loginData = useSelector(signInTodos);

  useEffect(() => {
    if (loginData?.data?.message === "Verify Your OTP") {
      nav("/otp");
    }
  }, [loginData]);

  return (
    <div className="sign-in-conatiner">
      <div className="heading-div">
        <h1>Admin Login</h1>
        <hr />
      </div>
      <div className="sign-in-col">
        <h1>Welcome to Admin Panel</h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name="email" label="Email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
