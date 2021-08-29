import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Weighing } from '../../models';
import { createWeighing, getWeighings } from '../../util/http';
import { ActionType } from '../action-types';
import { NotificationAction, WeighingsAction } from '../actions';
import { showNotification } from '../../util/helpers';

export const hideNotification = () => ({
  type: ActionType.HIDE_NOTIFICATION,
});

export const setWeighings =
  (): ThunkAction<
    void,
    RootState,
    unknown,
    WeighingsAction | NotificationAction
  > =>
  async (dispatch, getState) => {
    dispatch({
      type: ActionType.INIT_HTTP_REQUEST,
    });

    let weighings: Weighing[] = [];
    try {
      const { token } = getState().authUser;
      const { data } = await getWeighings(token);
      weighings = data;
    } catch (err) {
      showNotification(dispatch, {
        type: ActionType.SHOW_ERROR_NOTIFICATION,
        payload: {
          message: 'Could not get weighings data',
        },
      });
    } finally {
      dispatch({
        type: ActionType.SET_WEIGHINGS,
        payload: { weighings },
      });
    }
  };

export const addWeighing =
  (
    weighing: Weighing
  ): ThunkAction<
    void,
    RootState,
    unknown,
    WeighingsAction | NotificationAction
  > =>
  async (dispatch, getState) => {
    dispatch({
      type: ActionType.INIT_HTTP_REQUEST,
    });

    try {
      const { token } = getState().authUser;
      const { data } = await createWeighing(token, weighing);

      dispatch({
        type: ActionType.ADD_WEIGHING,
        payload: {
          weighing: {
            ...weighing,
            id: data.id,
          },
        },
      });

      showNotification(dispatch, {
        type: ActionType.SHOW_SUCCESS_NOTIFICATION,
        payload: {
          message: 'Weighing added!',
        },
      });
    } catch (err) {
      showNotification(dispatch, {
        type: ActionType.SHOW_ERROR_NOTIFICATION,
        payload: {
          message: err.message,
        },
      });
    }
  };
