import { createSelector } from "reselect";
const selectOurBanner = (state) => state.users;
const selectGameDetail = (state) => state.gameDetail;
const selectUSerBetDetail = (state) => state.getUserDetailByButton;
const updateResult = (state) => state.updateResult;
const updateTimeSelector = (state) => state.updateTimeR;
const updateTimeResultSelector = (state) => state.updateResultTime;
const createGameSelector = (state) => state.createGame;
const monthResultSelector = (state) => state.monthResult;
const monthDataSelector = (state) => state.monthData;
const withdrawalSelector = (state) => state.withdrawal;
const getRechargeAmountSelector = (state) => state.getRecharge;
const paidMoneySelector = (state) => state.paidMoney;
const addAcountSelector = (state) => state.addAcount;
const getNumberSelector = (state) => state.getNumberDetail;
const signInReducerSelector = (state) => state.signInReducer;
const OtpSelector = (state) => state.otpVerifiedReducer;
const logOutSelector = (state) => state.logOutReducer;
const createAdminSelector = (state) => state.createAdminReducer;
const updateApplicationSelector = (state) => state.updateApplicationReducer;
const allUserSelector = (state) => state.allUserDetailReducer;
const userTransactionSelector = (state) => state.userTransactionReducer;
const userGameDataSelector = (state) => state.userGameDataReducer;
const addContentSelector = (state) => state.addContentReducer;
const updateWithdrawalSelector = (state) => state.udateWithdrawalTimingReducer;
const calculationSelector = (state) => state.calculationDataReducer;
const getGameSelector = (state) => state.getGameReducer;
const addUpiDetailSelector = (state) => state.addUpiReducer;
const addHandlingSelector = (state) => state.addHandlingReducer;
const allHandlingSelector = (state) => state.getAllHandlingReducer;
const deletehandlingSelector = (state) => state.deleteHandlingReducer;
const subAdminSelector = (state) => state.subAdminListReducer;
const blockAdminSelector = (state) => state.blockAdminReducer;
const upiListSelector = (state) => state.upiListReducer;
const partnerUserSelector = (state) => state.partnerUserReducer;
const dashboardSelector = (state) => state.dashboardReducer;
const userDetailSelector = (state) => state.userDetailReducer;
const winningHistorySelector = (state) => state.winningHistoryReducer;
const newUserSelector = (state) => state.newUserReducer;
const userProfileSelector = (state) => state.userProfileReducer;
const gamePlayedHistorySelector = (state) => state.gamePlayedHistoryReducer;
const userWinningHistorySelector = (state) => state.userWinningHistoryReducer;
const rejectedRequestSelector = (state) => state.rejectedRequestReducer;

const withdrawalRequestApproveSelector = (state) =>
  state.approveWithdrawalRequest;

const winningRuppesSelector = (state) => state.winningRupessReducer;

const menuPulateReducerSelector = (state) => state.menuPulateReducer;

export const selectGameTodos = createSelector(selectOurBanner, (data) => {
  return data;
});
export const selectGameDeatilTodos = createSelector(
  selectGameDetail,
  (data) => {
    return data;
  }
);

export const selectUSerBetDetailTodos = createSelector(
  selectUSerBetDetail,
  (data) => {
    return data;
  }
);
export const updateResultTodos = createSelector(updateResult, (data) => {
  return data;
});

export const updateTimeTodos = createSelector(updateTimeSelector, (data) => {
  return data;
});
export const updateResultTimeTodos = createSelector(
  updateTimeResultSelector,
  (data) => {
    return data;
  }
);
export const createGameTodos = createSelector(createGameSelector, (data) => {
  return data;
});
export const manthResultTodos = createSelector(monthResultSelector, (data) => {
  return data;
});
export const manthDataTodos = createSelector(monthDataSelector, (data) => {
  return data;
});

export const withdrawalTodos = createSelector(withdrawalSelector, (data) => {
  return data;
});

export const withdrawalRequestApproveTodos = createSelector(
  withdrawalRequestApproveSelector,
  (data) => {
    return data;
  }
);

export const getRechargeAmountTodos = createSelector(
  getRechargeAmountSelector,
  (data) => {
    return data;
  }
);

export const paidMoneyTodos = createSelector(paidMoneySelector, (data) => {
  return data;
});

export const addAccountTodos = createSelector(addAcountSelector, (data) => {
  return data;
});

export const getNumberTodos = createSelector(getNumberSelector, (data) => {
  return data;
});

export const signInTodos = createSelector(signInReducerSelector, (data) => {
  return data;
});

export const otpTodos = createSelector(OtpSelector, (data) => {
  return data;
});

export const logoutTodos = createSelector(logOutSelector, (data) => {
  return data;
});

export const createTodos = createSelector(createAdminSelector, (data) => {
  return data;
});

export const updateApplicationTodos = createSelector(
  updateApplicationSelector,
  (data) => {
    return data;
  }
);

export const allUserTodos = createSelector(allUserSelector, (data) => {
  return data;
});

export const userTransactionTodos = createSelector(
  userTransactionSelector,
  (data) => {
    return data;
  }
);

export const usergameDataTodos = createSelector(
  userGameDataSelector,
  (data) => {
    return data;
  }
);

export const addContentTodos = createSelector(addContentSelector, (data) => {
  return data;
});

export const updateWithdrawalTodos = createSelector(
  updateWithdrawalSelector,
  (data) => {
    return data;
  }
);

export const calculationTodos = createSelector(calculationSelector, (data) => {
  return data;
});

export const getGameTodos = createSelector(getGameSelector, (data) => {
  return data;
});

export const addUpiDetailTodos = createSelector(
  addUpiDetailSelector,
  (data) => {
    return data;
  }
);

export const menuPulateTodos = createSelector(
  menuPulateReducerSelector,
  (data) => {
    return data;
  }
);

export const addHandlingTodos = createSelector(addHandlingSelector, (data) => {
  return data;
});
export const allHandlingTodos = createSelector(allHandlingSelector, (data) => {
  return data;
});

export const deleteHandlingTodos = createSelector(
  deletehandlingSelector,
  (data) => {
    return data;
  }
);
export const subAdminTodos = createSelector(subAdminSelector, (data) => {
  return data;
});

export const blockAdminTodos = createSelector(blockAdminSelector, (data) => {
  return data;
});

export const upiListTodos = createSelector(upiListSelector, (data) => {
  return data;
});

export const partnerUserTodos = createSelector(partnerUserSelector, (data) => {
  return data;
});

export const dashboardTodos = createSelector(dashboardSelector, (data) => {
  return data;
});

export const userDetailTodos = createSelector(userDetailSelector, (data) => {
  return data;
});

export const winningHistoryTodos = createSelector(
  winningHistorySelector,
  (data) => {
    return data;
  }
);

export const newUserTodos = createSelector(newUserSelector, (data) => {
  return data;
});

export const winningRupessTodos = createSelector(
  winningRuppesSelector,
  (data) => {
    return data;
  }
);

export const userProfileTodos = createSelector(userProfileSelector, (data) => {
  return data;
});

export const gamePalyedHistoryTodos = createSelector(
  gamePlayedHistorySelector,
  (data) => {
    return data;
  }
);

export const userWinningHistoryTodos = createSelector(
  userWinningHistorySelector,
  (data) => {
    return data;
  }
);

export const rejectedRequestTodos = createSelector(
  rejectedRequestSelector,
  (data) => {
    return data;
  }
);
