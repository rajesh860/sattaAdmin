import React from "react";
import RowData from "../../componets/rowData";
import { useState } from "react";
import ModalComponent from "../../componets/modal/ModalComponent";
import UpdateResultComponent from "../../componets/updateResultComponent/UpdateResultComponent";
import "./styles.scss";
const UpdateResult = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameId, setGameId] = useState({});
  const showModal = (gameId) => {
    setIsModalOpen(true);
    setGameId(gameId);
  };
  return (
    <div className="update-result-container">
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        compo={
          <UpdateResultComponent
            gameDetail={gameId}
            setIsModalOpen={setIsModalOpen}
          />
        }
      />
      <h1 style={{ paddingLeft: "10px", fontSize: "22px", marginTop: "0px" }}>
        Update Result
      </h1>
      <RowData
        btnProps={"updateResult"}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        showModal={showModal}
      />
    </div>
  );
};

export default UpdateResult;
