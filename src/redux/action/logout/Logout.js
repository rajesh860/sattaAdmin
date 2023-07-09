import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";

export const logoutAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_LOGOUT });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/LogOut.php`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        if (data?.data?.message === "Successfully LogOut") {
          localStorage.clear();
          window.location.replace("/sign-in");
        }
        dispatch({
          type: ActionType.REQUEST_SUCCESS_LOGOUT,
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
        type: ActionType.REQUEST_ERROR_LOGOUT,
        payload: response,
      });
    }
  };
};
