import axios from "axios";
import { ActionType } from "../../actionType/ActionType";
import { message } from "antd";
import { signIn } from "../../../routes/pagesRoutes";
import { getData } from "../marketAnalysisAction/MarketAnalysisAction";

export const getGameStatus = (updatedata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.REQUEST_PENDING_GET_GAME_STATUS });
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/AdminHandling/GameStatusChange.php`,
        updatedata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        dispatch(getData());
        message.success(data.data.message);
        dispatch({
          type: ActionType.REQUEST_SUCCESS_GET_GAME_STATUS,
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
        type: ActionType.REQUEST_ERROR_GET_GAME_STATUS,
        payload: response,
      });
    }
  };
};
