import { Collapse } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userTransactionAction } from "../../redux/action/userTransaction/userTransactionAction";
import { userTransactionTodos } from "../../redux/selector/Selector";
import Transactiontable from "./Transactiontable";
const { Panel } = Collapse;

const ViewTransactionCollapse = () => {
  const onChange = (key) => {
    console.log(key);
  };
  let { userId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userTransactionAction(userId));
  }, []);

  const data = useSelector(userTransactionTodos);
  const userTransactionData = data?.data?.data;
  if (userTransactionData) {
    return (
      <>
        {Object.keys(userTransactionData)?.map((curKey, index) => {
          if (userTransactionData[curKey]?.length > 0) {
            return (
              <Collapse
                defaultActiveKey={[curKey + index]}
                onChange={onChange}
                style={{ marginTop: "10px" }}
              >
                <Panel header={curKey} key={curKey + index}>
                  <Transactiontable
                    transactionData={userTransactionData[curKey]}
                  />
                </Panel>
              </Collapse>
            );
          } else {
            return "";
          }
        })}
      </>
    );
  }
};

export default ViewTransactionCollapse;
