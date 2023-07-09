import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { signIn } from "../../../routes/pagesRoutes";
import { message } from "antd";

export const getData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_MARKET_ANALYSIS });
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}/AdminHandling/GetGames.php`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        dispatch({
          type: ActionType.REQUEST_SUCCESS_MARKET_ANALYSIS,
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
        type: ActionType.REQUEST_ERROR_MARKET_ANALYSIS,
        payload: response,
      });
    }
  };
};
