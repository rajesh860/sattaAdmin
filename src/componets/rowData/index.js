import React, { useEffect } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectGameTodos } from "../../redux/selector/Selector";
import { getData } from "../../redux/action/marketAnalysisAction/MarketAnalysisAction";
import { Button, Switch } from "antd";
import { Link } from "react-router-dom";
import { getGameStatus } from "../../redux/action/gameActiveAction/GameActiveAction";
// Styles
import "./styles.scss";

const RowData = ({ btnProps, showModal }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const bannerData = useSelector(selectGameTodos);
  const baneer = bannerData?.data?.data || [];
  const btnArray = [
    "marketAnaylsis",
    "updateResult",
    "UpdateTime",
    "updateResultTime",
  ];
  const gameActive = (data) => {
    dispatch(getGameStatus(data));
  };

  return (
    <>
      {baneer?.map((curElm) => {
        return (
          <React.Fragment key={curElm?.name + curElm?.close + curElm?.Open}>
            <div className="bored">
              <div className="heading">
                <p>{curElm?.name}</p>
                {curElm?.Result > 0 ? (
                  <p>
                    Result: {curElm.Result}{" "}
                    <span>{Array.from(curElm.Result)[0] + "A"}</span>
                    <span style={{ paddingLeft: "10px" }}>
                      {Array?.from(curElm.Result)[1] + "B"}
                    </span>
                  </p>
                ) : (
                  ""
                )}

                <p>
                  <Switch
                    // <CheckOutlined />
                    // <CloseOutlined />
                    checkedChildren={"A"}
                    unCheckedChildren={"D"}
                    defaultChecked={curElm?.Status === "1" ? true : false}
                    onChange={() =>
                      gameActive({
                        id: curElm?.id,
                        status: curElm?.Status === "1" ? 0 : 1,
                      })
                    }
                  />

                  {/* </Button> */}
                </p>
              </div>

              <div className="data-row">
                <p>Open:{curElm?.Open}</p>
                <p>Close:{curElm?.Close}</p>

                <p>Resulttime:{curElm?.RealResultTime}</p>
                {btnProps === btnArray[0] ? (
                  <Button>
                    <Link to={`/market-analysis-details/${curElm?.id}`}>
                      View
                    </Link>
                  </Button>
                ) : btnProps === btnArray[1] ? (
                  <>
                    <Button
                      onClick={() =>
                        showModal({ id: curElm?.id, name: curElm.name })
                      }
                    >
                      Update Result
                    </Button>
                  </>
                ) : btnProps === btnArray[2] ? (
                  <>
                    <Button
                      onClick={() =>
                        showModal({ id: curElm?.id, name: curElm.name })
                      }
                    >
                      Update Time
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() =>
                        showModal({ id: curElm?.id, name: curElm.name })
                      }
                    >
                      Update Result Time
                    </Button>
                  </>
                )}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default RowData;
