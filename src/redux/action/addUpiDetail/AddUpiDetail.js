import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";

export const addUpiDetail = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_APP_DETAIL });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/updateUpiinformation.php`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        message.success(data.data.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_APP_DETAIL,
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
        type: ActionType.REQUEST_ERROR_APP_DETAIL,
        payload: response,
      });
    }
  };
};
