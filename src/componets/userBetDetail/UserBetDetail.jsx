import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCalculationAction } from "../../redux/action/calculationAction/CalculationAction";
import { useParams } from "react-router-dom";
import { calculationTodos } from "../../redux/selector/Selector";
import { GiCardExchange } from "react-icons/gi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "antd";
import { menuPulateNumber } from "../../redux/action/menuPulateNumber/menuPulateNumber";

const nameAndIcon = {
  jodi: {
    gameIcon1: <AiOutlineArrowRight />,
    gameIcon2: <AiOutlineArrowLeft />,
    gameIcon: <GiCardExchange color="white" />,
    name: "j",
  },
  andar: {
    gameIcon1: <AiOutlineArrowRight />,
    gameIcon2: <AiOutlineArrowLeft />,
    name: "A",
  },
  bahar: {
    gameIcon1: <AiOutlineArrowRight />,
    gameIcon2: <AiOutlineArrowLeft />,
    name: "B",
  },
  cross: {
    name: "C",
  },
};

const UserBetDetail = ({ data, number, sumData, Total, date }) => {
  const { id } = useParams();
  const gameData = { date: date, number: number, id: id };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCalculationAction(gameData));
  }, []);

  const getCalculationData = useSelector(calculationTodos);
  const getgameData = getCalculationData?.data?.data;
  const totalValueOfGame =
    getgameData?.baharrvalue + getgameData?.andarvalue + getgameData?.jodivalue;

  const handleClick = (data) => {
    dispatch(menuPulateNumber(data));
  };
  return (
    <div>
      <div className="total-heading-container">
        <div className="total-heading">
          <p>
            jodi <span>{getgameData?.jodinumber}</span>
            <span style={{ fontWeight: "600" }}>{getgameData?.jodivalue}</span>
          </p>

          <p>
            Haruf Andar
            <span>{getgameData?.andarnumber}</span>
            <span>{getgameData?.andarvalue}</span>
          </p>
          <p>
            Haruf Bhar
            <span>{getgameData?.baharnumber}</span>
            <span>{getgameData?.baharrvalue}</span>
          </p>
        </div>
        <div className="total">
          <p>total</p>
          <p>{totalValueOfGame}</p>

          <span
            style={{
              paddingLeft: "10px",
              color: sumData - totalValueOfGame > 0 ? "green" : "red",
            }}
          >
            {sumData - totalValueOfGame}
            <span style={{ paddingLeft: "10px" }}>
              <span>{sumData - totalValueOfGame > 0 && "+"}</span>
              {sumData - totalValueOfGame > 0 ? "Profite" : "Loss"}
            </span>
          </span>
        </div>
      </div>

      {data?.map((res, index) => {
        return (
          <div
            className="bet-modal-container"
            key={res.user + res.Amount + index + res.Game_Name}
          >
            <>
              <p>
                <span
                  style={{
                    backgroundColor: "orange",
                    width: "20px",
                    height: "20px",
                    borderRadius: "100px",
                    display: "inline-block",
                    textAlign: "center",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  {nameAndIcon[res.Game_Name].name}
                </span>
                {res.user}
              </p>
              <p>
                {res.Game_Name == "jodi" ? (
                  <>
                    <Button
                      style={{ background: "#3a57b8", color: "white" }}
                      onClick={() =>
                        handleClick({
                          number: number,
                          id: id,
                          user: res.user,
                          gn: Total.game,
                          value: 1,
                        })
                      }
                    >
                      {nameAndIcon[res.Game_Name].gameIcon2 || res.Game_Name}
                    </Button>
                    <Button
                      style={{ background: "#3a57b8", color: "white" }}
                      onClick={() =>
                        handleClick({
                          number: number,
                          id: id,
                          user: res.user,
                          gn: Total.game,
                          value: 0,
                        })
                      }
                    >
                      {nameAndIcon[res.Game_Name].gameIcon || res.Game_Name}
                    </Button>
                    <Button
                      style={{ background: "#3a57b8", color: "white" }}
                      onClick={() =>
                        handleClick({
                          number: number,
                          id: id,
                          user: res.user,
                          gn: Total.game,
                          value: 2,
                        })
                      }
                    >
                      {nameAndIcon[res.Game_Name].gameIcon1 || res.Game_Name}
                    </Button>
                  </>
                ) : res.Game_Name == "cross" ? (
                  ""
                ) : (
                  <>
                    <Button
                      style={{ background: "#3a57b8", color: "white" }}
                      onClick={() =>
                        handleClick({
                          number: number,
                          id: id,
                          user: res.user,
                          gn: Total.game,
                          value: 0,
                        })
                      }
                    >
                      {nameAndIcon[res.Game_Name].gameIcon2 || res.Game_Name}
                    </Button>
                    <Button
                      style={{ background: "#3a57b8", color: "white" }}
                      onClick={() =>
                        handleClick({
                          number: number,
                          id: id,
                          user: res.user,
                          gn: Total.game,
                          value: 1,
                        })
                      }
                    >
                      {nameAndIcon[res.Game_Name].gameIcon1 || res.Game_Name}
                    </Button>
                  </>
                )}
              </p>
              <p>{res.Amount}</p>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default UserBetDetail;
