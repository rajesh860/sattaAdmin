import React from "react";
import "./styles.scss";
import Form from "../../componets/form/createGame/Form";
const AddGame = () => {
  const changeDirection = () => {
    console.log("click");
  };
  return (
    <>
      <div className="add-game-container">
        <div className="add-game-col">
          <div className="up-col">
            <h1>CREATE GAME</h1>
          </div>
          <div className="down-col">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGame;
