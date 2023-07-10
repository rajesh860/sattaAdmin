import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";
import { withdrawalAction } from "../withdrawal/WithdrawalAction";

export const approveWithdrawalAction = (updatedata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_APPROVE_WITHDRAWAL_REQUEST });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/changewithdarwstatus.php`,
        updatedata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        // message.success(data.data.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_APPROVE_WITHDRAWAL_REQUEST,
          payload: data.data,
        });
        dispatch(withdrawalAction());
      }
    } catch (response) {
      if (response?.response?.status === 401) {
        localStorage.clear();
        window.location.replace(signIn);
      } else if (response?.response?.data?.message) {
        message.error(response?.response?.data?.message);
      }
      dispatch({
        type: ActionType.REQUEST_ERROR_APPROVE_WITHDRAWAL_REQUEST,
        payload: response,
      });
    }
  };
};
