import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";
import { upiListAction } from "../upiDetail";

export const updateUpiStatusAction = (updatedata) => {
  const user = localStorage.getItem("email");
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_UPDATE_UPI_STATUS });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/updateUpistatus.php`,
        updatedata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        message.success(data.data.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_UPDATE_UPI_STATUS,
          payload: data.data,
        });
        dispatch(upiListAction({ user }));
      }
    } catch (response) {
      if (response?.response?.status === 401) {
        localStorage.clear();
        window.location.replace(signIn);
      } else if (response?.response?.data?.message) {
        message.error(response?.response?.data?.message);
      }
      dispatch({
        type: ActionType.REQUEST_ERROR_UPDATE_UPI_STATUS,
        payload: response,
      });
    }
  };
};
