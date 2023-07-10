import { Button, message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHandlingAction } from "../../redux/action/addHandling";

const AddHandlingType = () => {
  const [textValue, setTextValue] = useState({
    txt: "",
    id: 1,
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
      <label htmlFor="">Enter Handling</label>
      <textarea
        id=""
        style={{ width: "100%", marginTop: "10px", padding: "10px" }}
        rows="10"
        placeholder="Handling"
        onChange={handleChangeText}
      ></textarea>
      <div style={{ width: "100%", textAlign: "end" }}>
        <Button
          style={{ background: "orange", border: "none", color: "white" }}
          onClick={submitData}
          className="button-17"
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default AddHandlingType;
