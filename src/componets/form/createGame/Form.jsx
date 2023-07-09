import { Button, Input, TimePicker } from "antd";
import React, { useState } from "react";
import "./styles.scss";
import dayjs from "dayjs";
import { CreateGame } from "../../../redux/action/createGame/CreateGame";
import { useDispatch } from "react-redux";
const Form = () => {
  const [openValue, setOpenValue] = useState(dayjs().format("hh:mm A"));
  const [closeValue, setCloseValue] = useState(dayjs().format("hh:mm A"));
  const [name, setName] = useState("");

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
    name: name,
    open: openValue,
    close: closeValue,
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(CreateGame(data));
  };
  return (
    <>
      <div className="create-game-row">
        <label htmlFor="" className="game-label">
          Enter Game
        </label>
        <Input
          type="text"
          placeholder="Enter Game..."
          className="game-input"
          onChange={(e) => handleChangeName(e)}
        ></Input>
      </div>
      <div className="second-input-container">
        <div className="left-col">
          <div className="create-game-row2">
            <label htmlFor="" className="game-label2">
              Open Time
            </label>
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
        </div>
        <div className="right-col">
          <div className="create-game-row2">
            <label htmlFor="" className="game-label2">
              Close Time
            </label>
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
        </div>
      </div>
      <div className="btn-div">
        <Button onClick={handleClick} className="button-17">
          Submit
        </Button>
      </div>
    </>
  );
};

export default Form;
