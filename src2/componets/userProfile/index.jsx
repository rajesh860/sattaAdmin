import { Avatar, Button, Input, message } from "antd";
import React, { useState } from "react";
////styles
import "./styles.scss";
import { useDispatch } from "react-redux";
import { editUserProfileAction } from "../../redux/action/editProfile";
import { verifiedEditProfileOtp } from "../../redux/action/verifiedEditProfileOtp";
import { editUserProfilePasswordAction } from "../../redux/action/editProfilePassword";
export let setPasswordRef;
export let otpPasswordRef;
const UserProfile = () => {
  const [password, setpassword] = useState(0);

  const [passwordInput, setpasswordInput] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const [otp, setOtp] = useState("");

  const userDeatil = {
    email: localStorage.getItem("email"),
    name: localStorage.getItem("userName"),
    number: localStorage.getItem("phone"),
  };
  const dispatch = useDispatch();

  const updateProfile = (email) => {
    dispatch(editUserProfileAction({ email }));
  };
  setPasswordRef = setpassword;
  otpPasswordRef = setpasswordInput;

  const otpVerified = (data) => {
    if (otp) {
      dispatch(verifiedEditProfileOtp(data));
    } else {
      message.error("Please Enter OTP");
    }
  };
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleChange2 = (e) => {
    setNewPassword(e.target.value);
  };
  const passwordUpadte = (data) => {
    if (newPassword) {
      dispatch(editUserProfilePasswordAction(data));
    } else {
      message.error("Please Enter Password");
    }
  };
  return (
    <div className="user-profile-container">
      <div className="profile-col">
        <Avatar
          size={200}
          icon={userDeatil.name && Array.from(userDeatil.name)[0]}
        />
      </div>
      <div className="info-user">
        <label htmlFor="">Name:</label>
        <Input placeholder="Name" disabled value={userDeatil.name} />
        <label htmlFor="">Email:</label>

        <Input placeholder="Email" disabled value={userDeatil.email} />
        <label htmlFor="">Phone no:</label>
        <Input placeholder="Phone no" disabled value={userDeatil.number} />
        {password == 1 ? (
          <>
            <label htmlFor="">Send OTP Your Register No</label>
            <Input placeholder="OTP" value={otp} onChange={handleChange} />
          </>
        ) : password == 2 ? (
          <>
            <label htmlFor="">Enter New Password</label>
            <Input
              placeholder="New Password"
              value={newPassword}
              onChange={handleChange2}
            />
          </>
        ) : (
          ""
        )}
        {password == 1 ? (
          <Button
            onClick={() => otpVerified({ email: userDeatil.email, otp: otp })}
          >
            Submit
          </Button>
        ) : password == 2 ? (
          <Button
            onClick={() =>
              passwordUpadte({ user: userDeatil.email, password: newPassword })
            }
          >
            Submit
          </Button>
        ) : (
          <Button onClick={() => updateProfile(userDeatil.email)}>
            Update Password
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
