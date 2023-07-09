import React, { useState } from "react";

// Styles
import "./styles.scss";
import { getUserByBet } from "../../redux/action/getUserByBet/GetUserByBet";
import { useDispatch, useSelector } from "react-redux";
import { selectUSerBetDetailTodos } from "../../redux/selector/Selector";
import { useParams } from "react-router-dom";
import ModalComponent from "../modal/ModalComponent";
import UserBetDetail from "../userBetDetail/UserBetDetail";
import { Select, Tooltip } from "antd";
import { FaRupeeSign } from "react-icons/fa";

let count = 0;

const OddsButton = ({
  data,
  top,
  keys,
  tableDataLength,
  Total,
  sumData,
  date,
  getRuppesValue,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [particularData, setParticularData] = useState();
  const [gameValue, setgameValue] = useState("");
  const { id } = useParams();
  const dataValue = data?.map(({ rupees }) => {
    return rupees;
  });
  count = 0;
  const valueCheckFun = (curElm) => {
    var top10 = dataValue.sort((a, b) => b - a).slice(0, top);
    if (top10?.includes(curElm) && count < 10) {
      count++;
      return true;
    } else {
      return false;
    }
  };

  const topLowestValue = (curElm) => {
    var top10Lowest = dataValue.sort((a, b) => a - b).slice(0, top);
    return top10Lowest?.includes(curElm);
  };

  const dispatch = useDispatch();

  const getDataFun = (sendData) => {
    const data = {
      date: date,
      number: sendData.no,
      game: id,
      gn: sendData.game,
    };
    dispatch(getUserByBet(data));
  };
  const bannerData = useSelector(selectUSerBetDetailTodos);
  const baneer = bannerData?.getDataOnButton?.data || [];
  // {}
  const showModal = (userDat) => {
    setIsModalOpen(true);
    getDataFun(userDat);
    setParticularData(userDat);
  };

  let sum = Number("");
  for (let key in data) {
    sum += Number(data[key]?.rupees);
    Total += sum;
  }
  const options = [
    {
      value: "jodi",
      label: "jodi",
    },
    {
      value: "cross",
      label: "cross",
    },
  ];
  const handleChange = (value) => {
    setgameValue(value);
    showModal(value);
  };
  return (
    <>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        compo={
          <UserBetDetail
            data={baneer?.game}
            Total={particularData}
            sumData={sumData}
            number={particularData?.no}
            date={date}
          />
        }
        Total={particularData}
      />
      <table className="table-component">
        <tr>
          {Array(tableDataLength)
            .fill()
            .map((_, curElm) => {
              const found = data?.find((obj) => {
                return (
                  obj?.number == curElm ||
                  obj?.number == `${curElm}A` ||
                  obj?.number == `${curElm}B`
                );
              });

              if (found) {
                const checkFun = valueCheckFun(found?.rupees);
                const innerItemBlock = (
                  <td
                    style={{
                      background:
                        getRuppesValue == found.number
                          ? "green"
                          : checkFun
                          ? "red"
                          : topLowestValue(found?.rupees)
                          ? "#17f9ff"
                          : "gray",
                      color: checkFun
                        ? "white"
                        : topLowestValue(found?.rupees)
                        ? "black"
                        : "white",
                    }}
                    onClick={() =>
                      keys !== "jodi" &&
                      showModal({
                        no: found?.number,
                        game: keys,
                        rupees: found.rupees,
                      })
                    }
                  >
                    <p>
                      <FaRupeeSign />
                      {found?.rupees}
                    </p>
                    <p>{found?.number}</p>
                  </td>
                );
                if (keys === "jodi")
                  return (
                    <React.Fragment key={found.rupees + found.number}>
                      <Tooltip
                        placement="topRight"
                        title={
                          <Select
                            options={options}
                            defaultValue="select"
                            style={{
                              width: 120,
                            }}
                            onChange={(value) =>
                              handleChange({
                                no: found?.number,
                                rupees: found.rupees,
                                game: value,
                              })
                            }
                          ></Select>
                        }
                      >
                        {innerItemBlock}
                      </Tooltip>
                    </React.Fragment>
                  );
                else {
                  return innerItemBlock;
                }
              } else {
                return (
                  <td
                    style={{
                      background:
                        getRuppesValue == curElm ||
                        getRuppesValue == `${curElm}A` ||
                        getRuppesValue == `${curElm}B`
                          ? "green"
                          : "",
                      color:
                        getRuppesValue == curElm ||
                        getRuppesValue == `${curElm}A` ||
                        getRuppesValue == `${curElm}B`
                          ? "white"
                          : "",
                    }}
                  >
                    <p>-</p>
                    <p>{curElm}</p>
                  </td>
                );
              }
            })}
          <tfoot className="table-footer">
            <tr>
              <td>sum</td>
              <td>{sum}</td>
            </tr>
          </tfoot>
        </tr>
      </table>
    </>
  );
};

export default OddsButton;
