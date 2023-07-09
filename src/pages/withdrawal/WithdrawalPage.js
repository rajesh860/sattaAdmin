import { Button, Input, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { withdrawalReducer } from "../../redux/reducers/withdrawalReducer/WithdrawalReducer";
import { withdrawalAction } from "../../redux/action/withdrawal/WithdrawalAction";
import { withdrawalTodos } from "../../redux/selector/Selector";
import ModalComponent from "../../componets/modal/ModalComponent";
import { useState } from "react";
// import UpdateResultComponent from "../../componets/updateResultComponent/UpdateResultComponent";
import AccountDetail from "../../componets/accountDetail/AccountDetail";
import { approveWithdrawalAction } from "../../redux/action/approveWithdrawalRequest/ApproveWithdrawalRequest";
import { columns } from "./withdrawTableColumn";

const WithdrawalPage = () => {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [resionInput, setResionInput] = useState("");
  const [approveData, setApproveData] = useState({});

  const [accountData, setAccountData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(withdrawalAction());
  }, []);

  const handleClickApi = (data) => {
    dispatch(approveWithdrawalAction(data));
  };
  const data = useSelector(withdrawalTodos);
  const request = data?.data?.data?.request;
  const account = data?.data?.data?.account;
  //   console.log(data?.data);

  const showModal = (idKey) => {
    setIsModalOpen(true);
    // setGameId(gameId);
    const found = account.find((obj) => {
      return obj.id == idKey.trim();
    });

    setAccountData(found);
  };
  const showModal2 = (id) => {
    setIsModalOpen2(true);
    setApproveData(id);
  };
  const showModal3 = (id) => {
    setApproveData(id);
    setIsModalOpen3(true);
  };
  console.log(approveData);
  const dataSource = request?.map((res) => {
    return {
      key: res.Date + res.Time + res.User,
      User: res.User,
      Time: res.time,
      Status: res.Status,
      Date: res.Date,
      amount: res.Amount,
      Action: (
        <>
          <Button onClick={() => showModal(res.AccountUpi)}>View</Button>
          <Button
            onClick={() =>
              showModal3({
                id: res.id,
                amount: res.Amount,
                user: res.User,
                account: res.AccountUpi,
                ab: 2,
              })
            }
            style={{ background: "red", color: "white", marginLeft: "10px" }}
          >
            Reject
          </Button>

          <Button
            style={{ background: "green", color: "white", marginLeft: "10px" }}
            onClick={() =>
              showModal2({
                id: res.id,
                amount: res.Amount,
                user: res.User,
                account: res.AccountUpi,
                ab: 1,
              })
            }
          >
            Approve
          </Button>
        </>
      ),
    };
  });
  console.log(resionInput, "resin");
  return (
    <div>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        width={"100%"}
        compo={<AccountDetail data={accountData} />}
      />
      <ModalComponent
        isModalOpen={isModalOpen3}
        setIsModalOpen={setIsModalOpen3}
        // width={"100%"}
        compo={
          <div>
            <p>Please Enter Resion</p>
            <TextArea
              rows={4}
              placeholder="Write Resion"
              onChange={(e) =>
                setApproveData((prev) => {
                  return {
                    ...prev,
                    msg: e.target.value,
                  };
                })
              }
            />
            <p>
              <Button
                style={{ background: "orange", color: "white" }}
                onClick={() =>
                  approveData?.msg
                    ? handleClickApi(approveData)
                    : alert("Please Enter Resion")
                }
              >
                Continue
              </Button>
            </p>
          </div>
        }
      />
      <ModalComponent
        isModalOpen={isModalOpen2}
        setIsModalOpen={setIsModalOpen2}
        compo={
          <div>
            <p>Are You Sure You Want to Continue</p>
            <p>
              <Button
                style={{ background: "orange", color: "white" }}
                onClick={() => handleClickApi(approveData)}
              >
                Continue
              </Button>
            </p>
          </div>
        }
      />
      <h1 style={{ paddingLeft: "10px", fontSize: "22px" }}>
        Withdrawal Request
      </h1>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default WithdrawalPage;
