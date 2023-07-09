import { Button, message } from "antd";
import React, { useState } from "react";
import { addHandlingAction } from "../../redux/action/addHandling";
import { useDispatch } from "react-redux";

const AddCommission = () => {
  const [textValue, setTextValue] = useState({
    txt: "",
    id: 3,
  });
  const dispatch = useDispatch();

  const submitData = () => {
    if (!textValue.txt) {
      message.error("Please Enter value");
    } else {
      dispatch(addHandlingAction(textValue));
    }
  };
  const handleChangeText = (e) => {
    let value = e.target.value;
    setTextValue((prev) => {
      return {
        ...prev,
        txt: value,
      };
    });
  };
  return (
    <div>
      <label htmlFor="">Enter Commission</label>
      <textarea
        name=""
        id=""
        style={{ width: "100%", marginTop: "10px", padding: "10px" }}
        rows="10"
        placeholder="Commission"
        onChange={handleChangeText}
      ></textarea>
      <div style={{ width: "100%", textAlign: "end" }}>
        <Button
          style={{ background: "orange", border: "none", color: "white" }}
          onClick={submitData}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default AddCommission;
