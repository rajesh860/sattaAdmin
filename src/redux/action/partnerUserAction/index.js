import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";
export const partnerUser = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_PARTNER_USER });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/getusersaccoutingtouser.php`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        if (data?.data?.status == 200) {
          message.success(data?.data?.message);
        } else if (data?.data?.status == 201) {
          message.error(data?.data?.message);
        }
        dispatch({
          type: ActionType.REQUEST_SUCCESS_PARTNER_USER,
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
        type: ActionType.REQUEST_ERROR_PARTNER_USER,
        payload: response,
      });
    }
  };
};
