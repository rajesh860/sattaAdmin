import React, { useState } from "react";
import { Avatar, Button, Modal } from "antd";
import { useParams } from "react-router-dom";
import { MdCasino } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../redux/action/userProfile";
import { useEffect } from "react";
import {
  gamePalyedHistoryTodos,
  userProfileTodos,
  userWinningHistoryTodos,
} from "../../redux/selector/Selector";
import { BiRupee } from "react-icons/bi";
////styles
import "./styles.scss";
import ReferHistory from "../../componets/referHistoryComponent";
import CollapseDetail from "./collapseDetail";
import { gamePalyedHistory } from "../../redux/action/gamePlayedHistory";
import { userWinningHistoryAction } from "../../redux/action/userWinningHistory";
const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction(user));
    dispatch(gamePalyedHistory(user));
    dispatch(userWinningHistoryAction(user));
  }, []);
  const userWinnigHistory = useSelector(userWinningHistoryTodos);
  const winningData = userWinnigHistory?.data?.dataWinning;
  const winningGameName = userWinnigHistory?.data?.GameName;
  console.log(winningData);
  const userData = useSelector(userProfileTodos);
  const Rewardrecived = userData?.data?.Rewardrecived;
  let RewardSend = userData?.data?.RewardSend;
  const userProfileData = userData?.data?.data;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const gamePlayedHistoryData = useSelector(gamePalyedHistoryTodos);
  const gameData = gamePlayedHistoryData?.gameDeatilData?.data?.data;
  const GameName = gamePlayedHistoryData?.gameDeatilData?.data?.GameName;
  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel} width={600}>
        <ReferHistory data={RewardSend} />
      </Modal>
      <div className="user-profile-container">
        <div className="top-pfofile-section">
          <div className="wallet">
            <p>Wallet :{userProfileData?.WalletAmount}</p>
          </div>
          <div className="top-left-col">
            <Avatar
              style={{
                backgroundColor: "#87d068",
                color: "#f56a00",
              }}
              size={124}
            >
              U
            </Avatar>
            <Button
              className="button-17"
              style={{ width: "180px" }}
              onClick={() => (RewardSend === null ? "" : showModal())}
            >
              Refer:
              {RewardSend === null ? (
                <span style={{ fontWeight: "900", paddingLeft: "6px" }}>0</span>
              ) : (
                ""
              )}
            </Button>
          </div>
          <div className="top-right-col">
            <p className="name">
              <p>{userProfileData?.name}</p>
            </p>
            <p className="number">
              <p>{userProfileData?.phone}</p>
            </p>
            <p className="player">
              {userProfileData?.usertype === "2" ? (
                <>
                  Player
                  <span>
                    <MdCasino />
                  </span>
                </>
              ) : (
                "KahyiWall"
              )}
            </p>
            <p className="refrence">
              <p>
                {Rewardrecived === null ? (
                  <div className="">User From Link </div>
                ) : (
                  <>
                    Refrence <AiOutlineArrowLeft className="left-arrow" />
                    <span>{Rewardrecived?.sender}</span>
                    <div
                      className="blink"
                      style={{
                        fontWeight: "900",
                        color: "green",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      +50 <BiRupee />
                    </div>
                  </>
                )}
              </p>
            </p>
          </div>
        </div>
        <></>
        <div className="bottom-pfofile-section">
          <CollapseDetail
            data={gameData}
            GameName={GameName}
            no={0}
            panelName="Game Played History"
          />
          <CollapseDetail
            winningData={winningData}
            no={1}
            WinningGameName={winningGameName}
            panelName="Winning History"
          />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
