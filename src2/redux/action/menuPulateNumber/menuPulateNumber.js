import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";
import { getUserByBet } from "../getUserByBet/GetUserByBet";

export const menuPulateNumber = (sendData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_MENUPULATE });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/menupulatenumber.php`,
        sendData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        dispatch(getUserByBet());
        message.success(data?.data?.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_MENUPULATE,
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
        type: ActionType.REQUEST_ERROR_MENUPULATE,
        payload: response,
      });
    }
  };
};
