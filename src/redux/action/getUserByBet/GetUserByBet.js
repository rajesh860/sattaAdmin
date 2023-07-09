import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";

export const getUserByBet = (sendData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_GET_USER_BY_BET });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/DeshboardNumberSendByUsers.php`,
        sendData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        dispatch({
          type: ActionType.REQUEST_SUCCESS_GET_USER_BY_BET,
          payload: data.data,
        });
      }
    } catch (response) {
      if (response?.response?.status === 401) {
        localStorage.clear();
        window.location.replace(signIn);
      } else if (response?.response?.data?.message) {
        message.error(response?.response?.data?.message);
      }
      dispatch({
        type: ActionType.REQUEST_ERROR_GET_USER_BY_BET,
        payload: response,
      });
    }
  };
};
