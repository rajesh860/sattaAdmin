import { Modal } from "antd";
import React from "react";

const ModalComponent = ({ setIsModalOpen, isModalOpen, compo, width }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose={true}
      width={!width ? width : ""}
      // style={{ overflowX: "scroll" }}
    >
      {compo}
    </Modal>
  );
};

export default ModalComponent;
