import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";
export const otpVerified = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_OTP_VERIFIED });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/otpVerify.php`,
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
          type: ActionType.REQUEST_SUCCESS_OTP_VERIFIED,
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
        type: ActionType.REQUEST_ERROR_OTP_VERIFIED,
        payload: response,
      });
    }
  };
};
