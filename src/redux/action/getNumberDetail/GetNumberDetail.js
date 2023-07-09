import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";

export const getNumberDetailAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_GET_NUMBER_DETAIL });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/GetNumber.php`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        dispatch({
          type: ActionType.REQUEST_SUCCESS_GET_NUMBER_DETAIL,
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
        type: ActionType.REQUEST_ERROR_GET_NUMBER_DETAIL,
        payload: response,
      });
    }
  };
};
