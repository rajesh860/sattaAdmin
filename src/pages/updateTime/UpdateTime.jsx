import React, { useState } from "react";
import RowData from "../../componets/rowData";
import ModalComponent from "../../componets/modal/ModalComponent";
import UpdateTimeComponent from "../../componets/updateTimeComponent/UpdateTimeComponent";
import "./styles.scss";
const UpdateTime = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameId, setGameId] = useState("");
  const showModal = (gameId) => {
    setIsModalOpen(true);
    setGameId(gameId);
  };
  return (
    <div className="update-time-container">
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        compo={
          <UpdateTimeComponent
            gameDetail={gameId}
            setIsModalOpen={setIsModalOpen}
          />
        }
      />
      <h1 style={{ paddingLeft: "10px", fontSize: "22px", marginTop: "0px" }}>
        Update Time
      </h1>
      <RowData
        btnProps={"UpdateTime"}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        gameId={gameId}
        showModal={showModal}
      />
    </div>
  );
};

export default UpdateTime;
