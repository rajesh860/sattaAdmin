import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";

export const udateResult = (updatedata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_UPDATE_RESULT });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/updateResult.php`,
        updatedata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        message.success(data.data.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_UPDATE_RESULT,
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
        type: ActionType.REQUEST_ERROR_UPDATE_RESULT,
        payload: response,
      });
    }
  };
};
