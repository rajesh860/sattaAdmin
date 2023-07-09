import { Tabs } from "antd";
import React, { useEffect } from "react";
import MonthResultRow from "../monthResultCollapse/MonthResultRow";
import { useDispatch, useSelector } from "react-redux";
import { monthData } from "../../redux/action/monthData/MonthData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { manthDataTodos } from "../../redux/selector/Selector";

const MonthDataTabs = () => {
  const [tabsKey, settabsKey] = useState("jodi");
  const { id } = useParams();
  const onChange = (key) => {
    settabsKey(key);
  };
  const data = {
    id: id,
    game: tabsKey,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(monthData(data));
  }, [tabsKey]);
  const matchData = useSelector(manthDataTodos);
  const matchDataVar = matchData?.data?.data;

  const items = [
    {
      key: "jodi",
      label: "jodi",
      children: <MonthResultRow data={matchDataVar} />,
    },
    {
      key: "andar",
      label: "Haruf_Andar",
      children: <MonthResultRow data={matchDataVar} />,
    },
    {
      key: "bahar",
      label: "Haruf_Bahar",
      children: <MonthResultRow data={matchDataVar} />,
    },
  ];
  return (
    <div>
      <Tabs onChange={onChange} type="card" items={items} />
    </div>
  );
};

export default MonthDataTabs;
