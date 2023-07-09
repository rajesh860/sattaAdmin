import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";

export const userTransactionAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_USER_TRANSACTION });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/perticulerUserDataTransection.php`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        dispatch({
          type: ActionType.REQUEST_SUCCESS_USER_TRANSACTION,
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
        type: ActionType.REQUEST_ERROR_USER_TRANSACTION,
        payload: response,
      });
    }
  };
};
