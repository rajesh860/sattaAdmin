import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";
import { modalRef } from "../../../layout/header";

export const addHandlingAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_ADD_HANDLING });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/AddHandling.php`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        modalRef(false);
        message.success(data.data.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_ADD_HANDLING,
          payload: data.data,
        });
      }
    } catch (response) {
      if (response?.response?.status === 401) {
        window.location.replace(signIn);
        localStorage.clear();
      } else if (response?.response?.data?.message) {
        message.error(response?.response?.data?.message);
      }
      dispatch({
        type: ActionType.REQUEST_ERROR_ADD_HANDLING,
        payload: response,
      });
    }
  };
};
