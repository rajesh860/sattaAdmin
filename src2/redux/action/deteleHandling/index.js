import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";
import { getAllHandling } from "../handlingAction";
import { handlingCancelModal } from "../../../pages/handling/TableData";

export const deleteHandlingAction = (updatedata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_DELETE_HANDLING });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/AddHandlingDeleted.php`,
        updatedata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        if (data.data.status == 200) {
          message.success(data.data.message);
          handlingCancelModal();
        }
        // console.log(data?.data?.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_DELETE_HANDLING,
          payload: data.data,
        });
        dispatch(getAllHandling());
      }
    } catch (response) {
      if (response?.response?.status === 401) {
        localStorage.clear();
        window.location.replace(signIn);
      } else if (response?.response?.data?.message) {
        message.error(response?.response?.data?.message);
      }
      dispatch({
        type: ActionType.REQUEST_ERROR_DELETE_HANDLING,
        payload: response,
      });
    }
  };
};
