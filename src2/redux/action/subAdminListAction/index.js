import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";
export const subAdminListAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_SUB_ADMIN_LIST });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/SubAdminGetAll.php`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        dispatch({
          type: ActionType.REQUEST_SUCCESS_SUB_ADMIN_LIST,
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
        type: ActionType.REQUEST_ERROR_SUB_ADMIN_LIST,
        payload: response,
      });
    }
  };
};
