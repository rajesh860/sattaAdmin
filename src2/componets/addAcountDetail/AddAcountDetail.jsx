import { Button, Input } from "antd";
import React, { useEffect } from "react";
import { addAcountDetailAction } from "../../redux/action/addAcountDetail/AddAccountDetail";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getNumberDetailAction } from "../../redux/action/getNumberDetail/GetNumberDetail";
import { getNumberTodos } from "../../redux/selector/Selector";

export const AddAcountDetail = () => {
  useEffect(() => {
    dispatch(getNumberDetailAction());
  }, []);

  const data = useSelector(getNumberTodos);
  let telegram = data?.data?.data?.telegram;
  let whatsapp = data?.data?.data?.whatsapp;
  const [value, setvalue] = useState({
    tel: null,
    wa: null,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setvalue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const SubmitForm = () => {
    dispatch(addAcountDetailAction(value));
  };

  return (
    <div>
      <p style={{ fontSize: "22px", marginBottom: "0px", marginTop: "0px" }}>
        Add Contact Detail
      </p>
      <p>
        <label htmlFor="">Enter Telegram Id</label>
      </p>
      <p>
        <Input
          name="tel"
          value={value.tel == null ? telegram : value.tel}
          onChange={(e) => handleChange(e)}
        ></Input>
      </p>
      <p>
        <label htmlFor="">Enter Whats App Number</label>
      </p>
      <p>
        <Input
          name="wa"
          value={value.wa == null ? whatsapp : value.wa}
          onChange={(e) => handleChange(e)}
        ></Input>
      </p>
      <p style={{ width: "100%", textAlign: "right" }}>
        <Button onClick={() => SubmitForm()} className="button-17">
          Submit
        </Button>
      </p>
    </div>
  );
};
