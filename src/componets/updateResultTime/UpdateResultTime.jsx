import { Button, TimePicker } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import UplaodImage from "../uplaodImage/UplaodImage";
import { udateResultTimeAction } from "../../redux/action/updateResultTime/UpdateResultTime";

const UpdateResultTimeComponent = ({ gameDetail }) => {
  const [fileList2, setFileList2] = useState([]);
  const [resultTimeValue, setResultTimeValue] = useState();
  const dispatch = useDispatch();
  // const updateResult = useSelector(updateResultTodos);

  const handleChange = (time, timeString) => {
    if (timeString) {
      setResultTimeValue(timeString);
    }
  };
  let formData = new FormData();
  formData.append("back", fileList2[0]?.originFileObj);
  formData.append("time", resultTimeValue);
  formData.append("id", gameDetail.id);
  const handleClick = () => {
    dispatch(udateResultTimeAction(formData));
  };
  return (
    <div>
      <p style={{ fontSize: "22px", marginBottom: "0px", marginTop: "0px" }}>
        Update Result Time
        <span
          style={{
            padding: "5px",
            borderRadius: "10px",
            backgroundColor: "teal",
            marginLeft: "10px",
            color: "white",
            fontSize: "14px",
          }}
        >
          {gameDetail.name}
        </span>
      </p>
      <hr />
      <div className="input-row">
        <p>Update Result Time</p>
        <TimePicker
          className="input-cls"
          name="timeclose"
          use12Hours
          format="hh:mm A"
          onChange={handleChange}
          defaultValue={dayjs(resultTimeValue)}
          // value={updateValue.timeclose}
        />
      </div>
      <div className="input-row">
        <p>Upload Result Image</p>
        <UplaodImage setFileList2={setFileList2} fileList2={fileList2} />
      </div>
      <p style={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <Button onClick={() => handleClick()}>Submit</Button>
      </p>
    </div>
  );
};

export default UpdateResultTimeComponent;
