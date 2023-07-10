import { Link } from "react-router-dom";
import {
  CreateAdminScreen,
  addGame,
  add_content,
  all_Handling,
  all_Sub_Admin,
  all_UPI_Detail,
  all_User,
  dashboard,
  marketAnalysisPage,
  paidMoney,
  rejectedRequest,
  transaction,
  updateResult,
  updateResultTime,
  updateTime,
  withdrawal,
} from "../../routes/pagesRoutes";
import {
  modalRef2,
  modalRef3,
  modalRef4,
  modalRef5,
  modalRef6,
  modalRef7,
} from "../header";

export const item = [
  {
    label: <Link to={dashboard}>Dashboard</Link>,
    key: "467",
  },
  {
    label: <Link to={marketAnalysisPage}>Game Analysis</Link>,
    key: "0",
  },
  {
    label: "Update Result & Time",
    key: "1",
    children: [
      {
        label: <Link to={updateResult}>1. Update Result</Link>,
        key: "2",
      },
      {
        label: <Link to={updateTime}>2. Update Game Time</Link>,
        key: "3",
      },
      {
        label: <Link to={updateResultTime}>3. Update Result Time</Link>,
        key: "4",
      },
      {
        label: <p onClick={() => modalRef4()}>4. Update Withdrawal Timming</p>,
        key: "42",
      },
    ],
  },
  {
    label: "Transaction",
    key: "45",
    children: [
      {
        label: "Main Wallet",
        key: "676",
        children: [
          {
            label: "Refund",
            key: "676",
          },
        ],
      },
      {
        label: <Link to={withdrawal}>1. Withdrawal Request</Link>,
        key: "6",
        // icon: <MailOutlined />,
      },
      {
        label: <Link to={transaction}>2. Received Amount</Link>,
        key: "7",
        // icon: <MailOutlined />,
      },
      {
        label: <Link to={paidMoney}>3. Paid Amount</Link>,
        key: "85656",
        // icon: <MailOutlined />,
      },

      {
        label: <Link to={rejectedRequest}>4. Rejected Request</Link>,
        key: "129",
      },
    ],
  },
  {
    label: <Link to={addGame}>Add Game</Link>,
    key: "5",
    // icon: <MailOutlined />,
  },

  {
    label: "User List",
    key: "10",
    children: [
      {
        label: <Link to={all_User}>1. User</Link>,
        key: "11",
      },
    ],
    // icon: <MailOutlined />,
  },

  {
    label: "Enterpreneur",
    key: "15",
    children: [
      {
        label: <Link to={CreateAdminScreen}>1. Create Admin/Partner</Link>,
        key: "9",
        // icon: <MailOutlined />,
      },
      {
        label: (
          <p
            onClick={() => {
              modalRef6();
            }}
          >
            2. Add Subscription Plan
          </p>
        ),
        key: "18",
      },
      {
        label: <Link to={all_Handling}>3. ALL Plans</Link>,
        key: "14",
        // icon: <MailOutlined />,
      },
      {
        label: <Link to={all_Sub_Admin}>4. Business Partner</Link>,
        key: "12",
        // icon: <MailOutlined />,
      },
    ],
  },
  {
    label: "Setting",
    key: "192",
    children: [
      {
        label: "Payment",
        key: "4767",
        children: [
          {
            label: <p onClick={() => modalRef5()}>1. Add Upi Detail</p>,
            key: "17",
          },
          {
            label: <Link to={all_UPI_Detail}>2. All UPI Detail</Link>,
            key: "192",
          },
        ],
      },
      {
        label: <p onClick={() => modalRef7()}>1. Update Contact Detail</p>,
        key: "16",
      },

      {
        label: <Link to={add_content}>2. Update Banner</Link>,
        key: "13",
        // icon: <MailOutlined />,
      },
      {
        label: (
          <p
            onClick={() => {
              modalRef3();
            }}
          >
            3. Update Application
          </p>
        ),
        key: "19",
      },
    ],
  },
];
