import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";

export const createAdminAction = (updatedata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_CREATE_ADMIN });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/CreateAdmin.php`,
        updatedata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        if (data.data.status === 200 || data.data.status === 201) {
          message.success(data.data.message);
        }
        // console.log(data?.data?.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_CREATE_ADMIN,
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
        type: ActionType.REQUEST_ERROR_CREATE_ADMIN,
        payload: response,
      });
    }
  };
};
