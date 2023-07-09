import { Button, TimePicker } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import dayjs from "dayjs";

import { updateTimeAction } from "../../redux/action/updateTime/UpdateTimeAction";
import { updateWithdrawalTimeAction } from "../../redux/action/updateWithdrawalTimeAction/UpdateWithdrawalTime";
const UpdateWithdrawlingComponent = ({ gameId }) => {
  const [openValue, setOpenValue] = useState();
  const [closeValue, setCloseValue] = useState();

  const handleChange = (time, timeString) => {
    if (timeString) {
      setOpenValue(timeString);
    }
    console.log(timeString);
  };
  const handleChange2 = (time, timeString) => {
    if (timeString) {
      setCloseValue(timeString);
    }
  };
  const data = {
    open: openValue,
    close: closeValue,
  };
  // const updateTime = useSelector(updateTimeTodos);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateWithdrawalTimeAction(data));
  };

  return (
    <div>
      <p style={{ fontSize: "22px", marginBottom: "0px" }}>
        Update Withdrawal Time
      </p>
      <hr />
      <div className="input-row">
        <p>Update Open Time</p>
        <TimePicker
          className="input-cls"
          name="timeopen"
          type="time"
          format="hh:mm A"
          use12Hours
          defaultValue={dayjs(openValue)}
          onChange={handleChange}
        />
      </div>
      <div className="input-row">
        <p>Update Close Time</p>
        <TimePicker
          className="input-cls"
          name="timeclose"
          use12Hours
          format="hh:mm A"
          onChange={handleChange2}
          defaultValue={dayjs(closeValue)}
          // value={updateValue.timeclose}
        />
      </div>
      <p className="botom">
        <Button onClick={handleClick}>Submit</Button>
      </p>
    </div>
  );
};

export default UpdateWithdrawlingComponent;
