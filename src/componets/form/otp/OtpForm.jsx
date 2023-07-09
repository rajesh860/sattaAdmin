import { Button, Form, Input } from "antd";
import React from "react";
// import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { otpTodos } from "../../../redux/selector/Selector";
import { otpVerified } from "../../../redux/action/otp/OtpVerified";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OTPComponent = () => {
  //   const [otpState, setOtpState] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onFinish = (value) => {
    const valueAppend = { ...value, email: localStorage.getItem("email") };
    dispatch(otpVerified(valueAppend));
  };
  const otpData = useSelector(otpTodos);
  useEffect(() => {
    if (otpData?.data?.message == "Verified") {
      localStorage.setItem("token", otpData?.data?.token);
      nav("/");
    }
  }, [otpData]);

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
          <Form.Item name="otp" label="OTP">
            <Input placeholder="OTP" />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="button-17">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default OTPComponent;
