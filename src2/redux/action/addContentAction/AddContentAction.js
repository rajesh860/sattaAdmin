import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";

export const addContentAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_ADD_CONTENT });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/HomePageContent.php`,
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
          type: ActionType.REQUEST_SUCCESS_ADD_CONTENT,
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
        type: ActionType.REQUEST_ERROR_ADD_CONTENT,
        payload: response,
      });
    }
  };
};
