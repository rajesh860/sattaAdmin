import { combineReducers } from "redux";
import { fetchData } from "./marketAnalysis/MarketAnalysisReducer";
import { gameDetailReducer } from "./gameDetailReducer/GameDetailReducer";
import { getUserDeatilReducer } from "./getDataByButton/GetDataByButton";
import { updateResultReducer } from "./updateResultReducer/UpdateResult";
import { updateTimeReducer } from "./updateTimeReducer/UpdateTimeReducer";
import { updateResultTimeReducer } from "./updateResultTime/UpdateResultTimeReducer";
import { createGameReducer } from "./createGameReducer/CreateGameReducer";
import { monthResultReducer } from "./monthResultReducer/MonthResultReducer";
import { monthDataReducer } from "./monthDataReducer/MonthDataReducer";
import { withdrawalRequestReducer } from "./withdrawalRequest/WithdrawalRequest";
import { approveWithdrawalRequestReducer } from "./approveWithdrawalRequest/approveWithdrawalRequest";
import { getRechargeAmountReducer } from "./getRechargeAmountReducer/GetRechargeAmountReducer";
import { paidMoneyReducer } from "./paidMoneyReducer/PaidMoneyReducer";
import { addAccountReducer } from "./addAccountDetailReducer/AddAccountDetailReducer";
import { getNumberDetailReducer } from "./getNumberDeatilReducer/getNumberDeatilReducer";
import { signInReducer } from "./signInReducer/SignInReducer";
import { otpVerifiedReducer } from "./otpReducer/OtpVerified";
import { logOutReducer } from "./logout/LogoutReducer";
import { createAdminReducer } from "./createAdminReducer/CreateAdminReducer";
import { updateApplicationReducer } from "./updateApplicationReducer/UpdateApplicationReducer";
import { allUserDetailReducer } from "./allUserDetailReducer/AllUserDetailReducer";
import { userTransactionReducer } from "./userTransactionReducer/UserTransactionReducer";
import { userGameDataReducer } from "./userGameData/UserGameData";
import { addContentReducer } from "./addContentReducer/AddContentReducer";
import { udateWithdrawalTimingReducer } from "./updateWithdrawalTimingReducer/UpdateWithdrawalTiming";
import { calculationDataReducer } from "./calculationRducer/CalculationReducer";
import { getGameReducer } from "./gameStatusReducer/GameStatusReducer";
import { addUpiReducer } from "./addUpiDetailReduer/AddUpiDetailReducer";
import { menuPulateReducer } from "./menuPulateRducer/MenuPulateReducer";
import { getAllHandlingReducer } from "./handlingReducer";
import { deleteHandlingReducer } from "./deleteHandlingReducer";
import { subAdminListReducer } from "./subAdminListReducer";
import { blockAdminReducer } from "./blockAdminReducer";
import { upiListReducer } from "./upiListReducer";
import { partnerUserReducer } from "./partnerUserReducer";
import { dashboardReducer } from "./dashboardReducer";
import { userDetailReducer } from "./userDetailReducer";
import { winningHistoryReducer } from "./winningHistoryReducer";
import { newUserReducer } from "./newUserReducer";
import { winningRupessReducer } from "./winningRupessReducer";
import { userProfileReducer } from "./userProfileReducer";
import { gamePlayedHistoryReducer } from "./gamePlayedHistoryReducer";
import { userWinningHistoryReducer } from "./userWinningHistoryReducer";
import { rejectedRequestReducer } from "./rejectedRequestReducer";
// import { withdrawalReducer } from "./withdrawalReducer/WithdrawalReducer";
// import { withdrawalRequestReducer } from "./withdrawalRequestReducer/WithdrawalRequestReducer";

export const rootReducer = combineReducers({
  users: fetchData,
  gameDetail: gameDetailReducer,
  getUserDetailByButton: getUserDeatilReducer,
  updateResult: updateResultReducer,
  updateTimeR: updateTimeReducer,
  updateResultTime: updateResultTimeReducer,
  createGame: createGameReducer,
  monthResult: monthResultReducer,
  monthData: monthDataReducer,

  withdrawal: withdrawalRequestReducer,
  approveWithdrawalRequest: approveWithdrawalRequestReducer,
  getRecharge: getRechargeAmountReducer,
  paidMoney: paidMoneyReducer,
  addAcount: addAccountReducer,
  getNumberDetail: getNumberDetailReducer,
  signInReducer: signInReducer,
  otpVerifiedReducer: otpVerifiedReducer,
  logOutReducer: logOutReducer,
  createAdminReducer: createAdminReducer,
  updateApplicationReducer: updateApplicationReducer,
  allUserDetailReducer: allUserDetailReducer,
  userTransactionReducer: userTransactionReducer,
  userGameDataReducer: userGameDataReducer,
  addContentReducer: addContentReducer,
  udateWithdrawalTimingReducer: udateWithdrawalTimingReducer,
  calculationDataReducer: calculationDataReducer,
  getGameReducer: getGameReducer,
  addUpiReducer: addUpiReducer,
  menuPulateReducer: menuPulateReducer,
  getAllHandlingReducer: getAllHandlingReducer,
  deleteHandlingReducer: deleteHandlingReducer,
  subAdminListReducer: subAdminListReducer,
  blockAdminReducer: blockAdminReducer,
  upiListReducer: upiListReducer,
  partnerUserReducer: partnerUserReducer,
  dashboardReducer: dashboardReducer,
  userDetailReducer: userDetailReducer,
  winningHistoryReducer: winningHistoryReducer,
  newUserReducer: newUserReducer,
  winningRupessReducer: winningRupessReducer,
  userProfileReducer: userProfileReducer,
  gamePlayedHistoryReducer: gamePlayedHistoryReducer,
  userWinningHistoryReducer: userWinningHistoryReducer,
  rejectedRequestReducer: rejectedRequestReducer,

  // withdrawalRequest: withdrawalRequestReducer,
});
