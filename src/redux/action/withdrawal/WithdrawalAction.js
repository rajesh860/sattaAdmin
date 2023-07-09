import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";

export const withdrawalAction = (updatedata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_WITHDRAWAL });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/GetWithdrawRequest.php`,
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
          type: ActionType.REQUEST_SUCCESS_WITHDRAWAL,
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
        type: ActionType.REQUEST_ERROR_WITHDRAWAL,
        payload: response,
      });
    }
  };
};
