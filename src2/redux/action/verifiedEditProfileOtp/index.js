import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";
import { otpPasswordRef, setPasswordRef } from "../../../componets/userProfile";

export const verifiedEditProfileOtp = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_EDIT_PROFILE_OTP });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/forgotpasswordotpverify.php`,
        id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        setPasswordRef(2);
        otpPasswordRef(true);
        // dispatch({
        //   type: ActionType.REQUEST_SUCCESS_EDIT_PROFILE_OTP,
        //   payload: data.data,
        // });
      }
    } catch (response) {
      if (response?.response?.status === 401) {
        localStorage.clear();
        window.location.replace(signIn);
      } else if (response?.response?.data?.message) {
        message.error(response?.response?.data?.message);
      }
      dispatch({
        type: ActionType.REQUEST_ERROR_EDIT_PROFILE_OTP,
        payload: response,
      });
    }
  };
};
