import React, { useState } from "react";
import { Avatar, Button, Drawer, Layout, Space } from "antd";

// Styles
import "./styles.scss";
import ModalComponent from "../../componets/modal/ModalComponent";
import { AddAcountDetail } from "../../componets/addAcountDetail/AddAcountDetail";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/action/logout/Logout";
import UpdateVersion from "../../componets/form/updateVersion/UpdateVersion";
import UpdateWithdrawlingComponent from "../../componets/updateWithdrawlingTime/UpdateWithdrawlingTime";
import AddUpiForm from "../../componets/form/addUpiForm/AddUpiForm";
import AddHandlingTabs from "../../componets/addHandlingTabs";
import AreYourSure from "../../componets/areSureComponent";
import UserProfile from "../../componets/userProfile";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const { Header } = Layout;
export let modalRef;

export let modalRef3;
export let modalRef4;
export let modalRef5;
export let modalRef2;
export let modalRef6;
export let modalRef7;

const AppHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const name = localStorage.getItem("userName");
  console.log(name);
  const showModal = () => {
    setIsModalOpen(true);
    // getDataFun(userDat);
  };

  const showModa2 = () => {
    setIsModalOpen2(true);
    // getDataFun(userDat);
  };

  const showModa3 = () => {
    setIsModalOpen3(true);
    // getDataFun(userDat);
  };
  const showModa4 = () => {
    setIsModalOpen4(true);
    // getDataFun(userDat);
  };
  const showModa5 = () => {
    setIsModalOpen5(true);
    // getDataFun(userDat);
  };
  const showModa6 = () => {
    setIsModalOpen6(true);
    // getDataFun(userDat);
  };
  const handleCancel = () => {
    setIsModalOpen6(false);
    setIsModalOpen5(false);
    setIsModalOpen4(false);
    setIsModalOpen3(false);
    setIsModalOpen2(false);
    setIsModalOpen(false);
  };
  modalRef = handleCancel;
  const dispatch = useDispatch();

  const logutFun = () => {
    dispatch(logoutAction());
  };
  modalRef2 = showModa2;
  modalRef3 = showModa3;
  modalRef4 = showModa4;
  modalRef5 = showModa5;
  modalRef6 = showModa6;
  modalRef7 = showModal;

  // {
  //   showModal: showModal,
  //   showModa2: showModa2,
  //   showModa3: ,
  //   showModa4: showModa4,
  //   showModa6: showModa6,
  // };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        title={
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            HELLO {name}
            <MdWavingHand color="orange" />
          </p>
        }
        width={320}
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Button
            onClick={modalRef2}
            style={{ background: "orange", border: "none", color: "white" }}
          >
            LOGOUT
          </Button>
        }
      >
        <UserProfile />
      </Drawer>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        compo={<AddAcountDetail />}
      />
      <ModalComponent
        isModalOpen={isModalOpen2}
        setIsModalOpen={setIsModalOpen2}
        compo={<AreYourSure fun={logutFun} name="Log Out" />}
      />
      <ModalComponent
        isModalOpen={isModalOpen3}
        setIsModalOpen={setIsModalOpen3}
        compo={<UpdateVersion />}
      />
      <ModalComponent
        isModalOpen={isModalOpen4}
        setIsModalOpen={setIsModalOpen4}
        compo={<UpdateWithdrawlingComponent />}
      />

      <ModalComponent
        isModalOpen={isModalOpen5}
        setIsModalOpen={setIsModalOpen5}
        compo={<AddUpiForm />}
      />
      <ModalComponent
        isModalOpen={isModalOpen6}
        setIsModalOpen={setIsModalOpen6}
        compo={<AddHandlingTabs />}
      />
      <Header className="app-header">
        <div className="left-col">
          <Link to="/">
            <AiOutlineArrowLeft className="svg" />
          </Link>
          <Link to="/">
            <div className="logo-div"> </div>
          </Link>
          <p>Admin Dashboard</p>
        </div>
        <div className="middle-col"></div>
        <div className="right-col">
          {/* <Button onClick={showModal}>Add Contact Detail</Button> */}
          {/* <Button onClick={showModa3}>Update Application Version</Button> */}
          {/* <Button onClick={showModa4}>Update withdrawaling Time</Button> */}
          {/* <Button onClick={showModa5}>Add UPI Detail</Button> */}
          {/* <Button onClick={showModa6}>Add Handling</Button> */}
          <div className="user-name">
            <Avatar
              size="large"
              style={{ background: "green", color: "white" }}
              onClick={showDrawer}
            >
              {name && Array.from(name)[0]}
            </Avatar>
            <h2 onClick={showDrawer}>{name}</h2>
          </div>
        </div>
      </Header>
    </>
  );
};

export default AppHeader;
