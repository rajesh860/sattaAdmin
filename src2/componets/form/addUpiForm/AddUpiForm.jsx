import { Button, Input } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUpiDetail } from "../../../redux/action/addUpiDetail/AddUpiDetail";

const AddUpiForm = () => {
  const [upiValue, setUpiValue] = useState({
    vpa: "",
    name: "",
    user: localStorage.getItem("email"),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUpiValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // const updateTime = useSelector(updateTimeTodos);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addUpiDetail(upiValue));
  };
  return (
    <div>
      <p style={{ fontSize: "22px", marginBottom: "0px" }}>ADD UPI DETAIL</p>
      <hr />
      <div className="input-row">
        <p>Add UPI</p>
        <Input
          className="input-cls"
          onChange={(e) => handleChange(e)}
          value={upiValue.vpa}
          name="vpa"
        />
      </div>
      <div className="input-row">
        <p>Name</p>
        <Input
          className="input-cls"
          onChange={(e) => handleChange(e)}
          value={upiValue.name}
          name="name"
        />
      </div>
      <p className="botom">
        <Button onClick={handleClick} className="button-17">
          Submit
        </Button>
      </p>
    </div>
  );
};

export default AddUpiForm;
