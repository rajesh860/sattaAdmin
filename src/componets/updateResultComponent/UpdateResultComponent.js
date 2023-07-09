import { Button, Input } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { udateResult } from "../../redux/action/updateResult/UpdateResult";

const UpdateResultComponent = ({ gameDetail, name }) => {
  const [updateValue, setUpdateValue] = useState({
    game: gameDetail.id,
    number: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value.length <= 2) {
      setUpdateValue((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    } else {
      return;
    }
  };
  const dispatch = useDispatch();
  // const updateResult = useSelector(updateResultTodos);
  const handleClick = () => {
    dispatch(udateResult(updateValue));
  };

  return (
    <div>
      <p style={{ fontSize: "22px", marginBottom: "0px", marginTop: "0px" }}>
        Update Result
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
          {" "}
          {name ? name : gameDetail.name}
        </span>
      </p>
      <p
        style={{ fontSize: "22px", marginBottom: "0px", marginTop: "0px" }}
      ></p>
      <hr />
      <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        Result
        <Input
          maxLength={2}
          type="number"
          name="number"
          value={updateValue.number}
          onChange={(e) => handleChange(e)}
        ></Input>
      </p>

      <p style={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <Button onClick={() => handleClick()}>Submit</Button>
      </p>
    </div>
  );
};

export default UpdateResultComponent;
