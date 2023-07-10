import React from "react";
import RowData from "../../componets/rowData";
import { useState } from "react";
import ModalComponent from "../../componets/modal/ModalComponent";
import UpdateResultTimeComponent from "../../componets/updateResultTime/UpdateResultTime";
import "./styles.scss";
const UpdateResultTime = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameId, setGameId] = useState("");
  const showModal = (gameId) => {
    setIsModalOpen(true);
    setGameId(gameId);
  };

  return (
    <div className="update-result-time-container">
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        compo={
          <UpdateResultTimeComponent
            gameDetail={gameId}
            setIsModalOpen={setIsModalOpen}
          />
        }
      />
      <h1 style={{ paddingLeft: "10px", fontSize: "22px", marginTop: "0px" }}>
        Update Result Time
      </h1>
      <RowData
        btnProps={"updateResultTime"}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        showModal={showModal}
      />
    </div>
  );
};

export default UpdateResultTime;
