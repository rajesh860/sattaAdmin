import { Button, Input, Select, message } from "antd";
import React, { useState } from "react";
import { addHandlingAction } from "../../redux/action/addHandling";
import { useDispatch } from "react-redux";

const AddSubscription = () => {
  const [textValue, setTextValue] = useState({
    txt: "",
    id: 2,
    type: "",
  });

  const dispatch = useDispatch();

  const submitData = () => {
    if (!textValue.txt) {
      message.error("Please Enter value");
    } else {
      dispatch(addHandlingAction(textValue));
    }
  };
  const handleChangeText = (value) => {
    setTextValue((prev) => {
      return {
        ...prev,
        type: value,
      };
    });
  };

  const option = [
    {
      value: "1",
      label: "Year",
    },
    {
      value: "0",
      label: "Month",
    },
  ];
  const handleChangeText2 = (e) => {
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
      <div>
        <label htmlFor="">Enter Subscription</label>
        <Input
          type="number"
          style={{
            width: "100%",
            marginTop: "10px",
            marginBottom: "10px",
            padding: "10px",
          }}
          rows="10"
          placeholder="Subscription"
          onChange={handleChangeText2}
        />
        <Select
          defaultValue="Select"
          style={{
            width: 120,
          }}
          options={option}
          onChange={handleChangeText}
        />
      </div>
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

export default AddSubscription;
