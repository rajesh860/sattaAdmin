import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";

export const signInAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_SIGN_IN });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/login.php`,
        id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        if (data?.data?.status == 200) {
          message.success(data?.data?.message);
          localStorage.setItem("userName", data.data.name);
          localStorage.setItem("phone", data.data.phone);
        } else {
          message.error(data?.data?.message);
        }
        dispatch({
          type: ActionType.REQUEST_SUCCESS_SIGN_IN,
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
        type: ActionType.REQUEST_ERROR_SIGN_IN,
        payload: response,
      });
    }
  };
};
