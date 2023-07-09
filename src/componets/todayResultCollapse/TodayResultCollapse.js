import React, { useEffect, useState } from "react";
import { Button, Collapse, DatePicker, Tooltip } from "antd";
import OddsButton from "../../componets/odds";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../redux/action/gameDeatil/GameDetail";
import {
  manthResultTodos,
  selectGameDeatilTodos,
  userDetailTodos,
  winningHistoryTodos,
  winningRupessTodos,
} from "../../redux/selector/Selector";
import { useParams } from "react-router-dom";

import { UserDetailAction } from "../../redux/action/userDetail";
import ModalComponent from "../modal/ModalComponent";
import UserDeatilList from "../userDetailComponent";
import UpdateResultComponent from "../updateResultComponent/UpdateResultComponent";
import { winningAmount } from "../../redux/action/winningHistory";
import WinningHistoryComponent from "../winningHistoryComponent";
import { monthResultData } from "../../redux/action/monthResult/MonthResult";
import { winningRupessAction } from "../../redux/action/winningAmountAction";
const { Panel } = Collapse;
const TodayResultCollapse = ({ setDate, date, com }) => {
  const [gameValue, setGameValue] = useState("");
  const [modalValue, setModalValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const payloadData = {
    id: id,
    date: date,
  };

  const getRuppesValue = useSelector(manthResultTodos);
  // const jodiNumber = data?.data?.data[0];
  // const andrNumber = data?.data?.data[1];
  // const bharNumber = data?.data?.data[2];
  // console.log(data?.data, "jofi");
  // const getRuppesValue = {
  //   jodiNumber: jodiNumber,
  //   andrNumber: andrNumber,
  //   bharNumber: bharNumber,
  // };
  // console.log(, "dat");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(monthResultData(payloadData));
    dispatch(UserDetailAction(payloadData));
    dispatch(getGameDetail(payloadData));
    dispatch(winningAmount(payloadData));
    dispatch(winningRupessAction(payloadData));
  }, [date]);
  const winningAmountData = useSelector(winningRupessTodos);

  const userData = useSelector(userDetailTodos);
  const jodiuser = userData?.data?.jodiuser;
  const crossuser = userData?.data?.crossuser;
  const baharuser = userData?.data?.baharuser;
  const andaruser = userData?.data?.andaruser;
  const bannerData = useSelector(selectGameDeatilTodos);
  const baneer = bannerData?.gameDeatilData?.data.data || [];
  const gameName = bannerData?.gameDeatilData?.data.name;
  // const AndarUsers = bannerData?.gameDeatilData?.data?.AndarUsers;
  // const BaharUsers = bannerData?.gameDeatilData?.data?.BaharUsers;
  // const CrossUsers = bannerData?.gameDeatilData?.data.CrossUsers;
  // const JodiUsers = bannerData?.gameDeatilData?.data?.JodiUsers;

  const colorListArray = [10, 5, 5];
  const tableDataLength = [100, 10, 10];
  const winningNumber = [
    getRuppesValue?.data?.data.length > 0 &&
      getRuppesValue?.data?.data[0]?.Result,
    getRuppesValue?.data?.data.length > 0 &&
      getRuppesValue?.data?.data[1]?.Result,
    getRuppesValue?.data?.data.length > 0 &&
      getRuppesValue?.data?.data[2]?.Result,
  ];
  let sum = Number("");
  Object.keys(baneer)?.map((curElm, index) => {
    let data = baneer[curElm];
    for (let key in data) {
      sum += Number(data[key]?.rupees);
    }
  });

  const onChange = (date, dateString) => {
    setDate(dateString);

    // console.log(date, moment(dateString).format("DD/MM/YYYY"));
  };
  const showModal = (value) => {
    setModalValue(value.value);
    setGameValue(value?.name);
    if (value) {
      setIsModalOpen(true);
    }
  };
  const gameDetail = {
    id: id,
  };

  const getWinningData = useSelector(winningHistoryTodos);
  const getWinningTotal = getWinningData?.data?.total;

  const getWinningHistory = () => {
    dispatch(winningAmount(payloadData));
  };

  const compObj = {
    0: (
      <UpdateResultComponent
        gameDetail={gameDetail}
        setIsModalOpen={setIsModalOpen}
        name={gameName ? gameName : ""}
      />
    ),
    1: <UserDeatilList data={userData?.data} gameValue={gameValue} />,
    2: <WinningHistoryComponent data={getWinningData} />,
  };

  return (
    <>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        compo={compObj[modalValue]}
      />
      {/* <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        compo={   [compObj]}
        // Total={particularData}
      /> */}
      <h1
        style={{
          fontSize: "24px",
          marginTop: "0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {gameName ? gameName : ""}
        <Tooltip
          placement="topRight"
          title={
            <div>
              <p>
                Game Played Amount: <span>{sum}</span>
              </p>
              <p>
                Winning Amount: <span>{winningAmountData?.data?.winning}</span>
              </p>
              <p
                style={{
                  color:
                    sum - winningAmountData?.data?.winning > 0
                      ? "green"
                      : Number(sum) -
                          Number(winningAmountData?.data?.winning) ==
                        0
                      ? "orange"
                      : "red",
                }}
              >
                {Number(sum) - Number(winningAmountData?.data?.winning) > 0
                  ? "PROFIT:"
                  : Number(sum) - Number(winningAmountData?.data?.winning) == 0
                  ? "Nill:"
                  : "Loss:"}

                <span>
                  {Number(sum) - Number(winningAmountData?.data?.winning)}
                </span>
              </p>
            </div>
          }
        >
          <Button
            style={{
              background:
                Number(sum) - Number(winningAmountData?.data?.winning) > 0
                  ? "green"
                  : Number(sum) - Number(winningAmountData?.data?.winning) == 0
                  ? "orange"
                  : "red",

              color: "white",
              width: "200px",
            }}
            className="blink button-17"
          >
            {Number(sum) - Number(winningAmountData?.data?.winning) > 0
              ? "PROFIT"
              : Number(sum) - Number(winningAmountData?.data?.winning) == 0
              ? "Nill"
              : "Loss"}
          </Button>
        </Tooltip>
        <span style={{ display: "flex", gap: "10px" }}>
          <Button
            className="button-17"
            style={{ background: "purple", color: "white" }}
            onClick={() => {
              showModal({ name: ``, value: 2 });
              getWinningHistory();
            }}
          >
            Winning History:
            <span style={{ paddingLeft: "10px" }}>{getWinningTotal}</span>
          </Button>
          <Button
            className="button-17"
            onClick={() => showModal({ name: ``, value: 0 })}
          >
            Update Result
          </Button>
        </span>
      </h1>
      <div className="detail-page-heading">
        <div className="detail-left-col-heading">
          {com === 1 ? "Today Data" : "Calender"}
        </div>

        <div className="detail-right-col-heading">
          <DatePicker onChange={onChange} />
          <Button
            onClick={() => showModal({ name: "andarUserdata", value: 1 })}
          >
            AndarUsers:{andaruser}
          </Button>
          <Button
            onClick={() => showModal({ name: "baharUserdata", value: 1 })}
          >
            BaharUsers:{baharuser}
          </Button>
          <Button
            onClick={() => showModal({ name: "crossUserdata", value: 1 })}
          >
            CrossUsers:{crossuser}
          </Button>
          <Button onClick={() => showModal({ name: "jodiUserdata", value: 1 })}>
            JodiUsers:{jodiuser}
          </Button>
          <Button>Total Received Amount:{sum}</Button>
        </div>
      </div>
      <Collapse
        defaultActiveKey={["jodi", "Andar", "Bahar"]}
        // onChange={onChange}
      >
        {Object.keys(baneer)?.map((curElm, index) => {
          return (
            <React.Fragment
              key={curElm + tableDataLength[index] + colorListArray[index]}
            >
              <Panel
                header={
                  <div style={{ fontSize: "18px", fontWeight: "500" }}>
                    {curElm?.charAt(0)?.toUpperCase() + curElm?.slice("1")}
                  </div>
                }
                key={curElm}
                className="game-panel"
              >
                <div className="odd-btn-container">
                  {/* <DetailPageTable /> */}

                  <OddsButton
                    data={baneer[curElm]}
                    keys={curElm}
                    sumData={sum}
                    date={date}
                    getRuppesValue={winningNumber[index]}
                    top={colorListArray[index]}
                    tableDataLength={tableDataLength[index]}
                  />
                </div>
              </Panel>
            </React.Fragment>
          );
        })}
      </Collapse>
    </>
  );
};

export default TodayResultCollapse;
