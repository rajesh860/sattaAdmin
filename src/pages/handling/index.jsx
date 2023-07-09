import { Collapse } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHandling } from "../../redux/action/handlingAction";
import { allHandlingTodos } from "../../redux/selector/Selector";
import "./styles.scss";

import TableData from "./TableData";
const { Panel } = Collapse;

const Handling = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHandling());
  }, []);
  const data = useSelector(allHandlingTodos);
  const objKeys = data?.data?.data;

  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ paddingLeft: "10px", fontSize: "22px" }}>All Handling</h1>
      {objKeys &&
        Object?.keys(objKeys)?.map((curElm, index) => {
          if (objKeys[curElm]) {
            return (
              <Collapse defaultActiveKey={["1"]} style={{ marginTop: "10px" }}>
                <Panel header={curElm} key="1">
                  <TableData data={objKeys[curElm]} curElm={curElm} />
                </Panel>
              </Collapse>
            );
          }
        })}
    </div>
  );
};

export default Handling;
