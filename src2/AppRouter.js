import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MarketAnalysisDetails from "./pages/marketAnalysisDetails";
import MarketAnalysis from "./pages/marketAnalysis";
import LayoutPrimary from "./layout/LayoutPrimary";
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
  signIn,
  transaction,
  updateResult,
  updateResultTime,
  updateTime,
  view_Transaction,
  view_User_Game_Data,
  withdrawal,
} from "./routes/pagesRoutes";
import UpdateResult from "./pages/updateResult/UpdateResult";
import UpdateTime from "./pages/updateTime/UpdateTime";
import UpdateResultTime from "./pages/updateResultTime/UpdateResultTime";
import AddGame from "./pages/addGame/AddGame";
import WithdrawalPage from "./pages/withdrawal/WithdrawalPage";
import TransactionPage from "./pages/transactionPage/TransactionPage";
import PiadMoneyPage from "./pages/paidMoney/PiadMoney";
import SignIn from "./pages/signIn/SignIn";
import OTPComponent from "./componets/form/otp/OtpForm";
import { useEffect } from "react";
import CreateAdmin from "./pages/createAdmin/CreateAdmin";
import AllUser from "./pages/allUser/AllUser";
import UserTransaction from "./pages/userTransaction/UserTransaction";
import UserGameData from "./pages/userGameData/UserGameData";
import AddContent from "./pages/addContent/AddContent";
import Handling from "./pages/handling";
import SubAdminList from "./pages/subAdminList";
import UpiDetail from "./pages/upiDetail";
import Dashboard from "./pages/dashboard";
import UserProfile from "./pages/userProfile";
import RejectedRequest from "./pages/rejectedRequest";

const AppRouter = () => {
  const nav = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    const x = localStorage.getItem("token");
    if (x) {
      if (loc.pathname === "/") {
        nav("/");
      }
    } else {
      if (!loc.pathname.includes("otp")) nav(signIn);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path={signIn} element={<SignIn />}></Route>
        <Route path="/otp" element={<OTPComponent />}></Route>

        <Route path="/" element={<LayoutPrimary />}>
          {/* <Route path="sataAdmin" element={<HomeScreen />} /> */}
          <Route path={dashboard} element={<Dashboard />} />

          <Route path={marketAnalysisPage} element={<MarketAnalysis />} />
          <Route
            path="/market-analysis-details/:id"
            element={<MarketAnalysisDetails com={1} />}
          />
          <Route
            path="/market-analysis-details-c/:id"
            element={<MarketAnalysisDetails com={2} />}
          />
          <Route path="/user-deatil/:user" element={<UserProfile com={2} />} />
          <Route path={updateResult} element={<UpdateResult />} />
          <Route path={rejectedRequest} element={<RejectedRequest />} />

          <Route path={updateTime} element={<UpdateTime />} />
          <Route path={updateResultTime} element={<UpdateResultTime />} />
          <Route path={addGame} element={<AddGame />} />
          <Route path={withdrawal} element={<WithdrawalPage />} />
          <Route path={transaction} element={<TransactionPage />} />
          <Route path={paidMoney} element={<PiadMoneyPage />} />
          <Route path={CreateAdminScreen} element={<CreateAdmin />} />
          <Route path={all_User} element={<AllUser />} />
          <Route
            path={`${view_Transaction}:userId`}
            element={<UserTransaction />}
          />
          <Route
            path={`${view_User_Game_Data}:userId`}
            element={<UserGameData />}
          />
          <Route path={add_content} element={<AddContent />} />
          <Route path={all_Handling} element={<Handling />} />
          <Route path={all_Sub_Admin} element={<SubAdminList />} />
          <Route path={all_UPI_Detail} element={<UpiDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
