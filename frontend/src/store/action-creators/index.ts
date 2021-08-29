import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Weighing } from '../../models';
import {
  createWeighing,
  getWeighings,
  updateWeighing,
  deleteWeighing,
  getProfile,
} from '../../util/http';
import { ActionType } from '../action-types';
import { NotificationAction, WeighingsAction, AuthAction } from '../actions';
import { showNotification } from '../../util/helpers';

type WeighingThunk = ThunkAction<
  void,
  RootState,
  unknown,
  WeighingsAction | NotificationAction
>;

type AuthThunk = ThunkAction<
  void,
  RootState,
  unknown,
  AuthAction | NotificationAction
>;

export const setWeighings = (): WeighingThunk => async (dispatch, getState) => {
  dispatch({ type: ActionType.INIT_WEIGHINGS_HTTP_REQUEST });

  let weighings: Weighing[] = [];
  try {
    const { token } = getState().authUser;
    const { data } = await getWeighings(token);
    weighings = data;
  } catch (err) {
    showNotification(dispatch, {
      type: ActionType.SHOW_ERROR_NOTIFICATION,
      payload: { message: 'Could not get weighings data' },
    });
  } finally {
    dispatch({
      type: ActionType.SET_WEIGHINGS,
      payload: { weighings },
    });
  }
};

export const addWeighing =
  (weighing: Weighing): WeighingThunk =>
  async (dispatch, getState) => {
    dispatch({ type: ActionType.INIT_WEIGHINGS_HTTP_REQUEST });

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
        payload: { message: 'Weighing added!' },
      });
    } catch (err) {
      showNotification(dispatch, {
        type: ActionType.SHOW_ERROR_NOTIFICATION,
        payload: { message: err.message },
      });
    }
  };

export const editWeighing =
  (weighing: Weighing): WeighingThunk =>
  async (dispatch, getState) => {
    dispatch({ type: ActionType.INIT_WEIGHINGS_HTTP_REQUEST });

    try {
      const { token } = getState().authUser;
      await updateWeighing(token, weighing);
      dispatch({
        type: ActionType.EDIT_WEIGHING,
        payload: { weighing },
      });
      showNotification(dispatch, {
        type: ActionType.SHOW_SUCCESS_NOTIFICATION,
        payload: { message: 'Weighing updated!' },
      });
    } catch (err) {
      showNotification(dispatch, {
        type: ActionType.SHOW_ERROR_NOTIFICATION,
        payload: { message: err.message },
      });
    }
  };

export const removeWeighing =
  (id: number): WeighingThunk =>
  async (dispatch, getState) => {
    dispatch({ type: ActionType.INIT_WEIGHINGS_HTTP_REQUEST });

    try {
      const { token } = getState().authUser;
      await deleteWeighing(token, id);
      dispatch({
        type: ActionType.DELETE_WEIGHING,
        payload: { id },
      });
      showNotification(dispatch, {
        type: ActionType.SHOW_SUCCESS_NOTIFICATION,
        payload: { message: 'Weighing deleted.' },
      });
    } catch (err) {
      showNotification(dispatch, {
        type: ActionType.SHOW_ERROR_NOTIFICATION,
        payload: { message: err.message },
      });
    }
  };

export const setProfile = (): AuthThunk => async (dispatch, getState) => {
  try {
    const { token } = getState().authUser;
    const {
      data: { username },
    } = await getProfile(token);
    dispatch({
      type: ActionType.SET_PROFILE,
      payload: {
        username,
      },
    });
  } catch (err) {
    showNotification(dispatch, {
      type: ActionType.SHOW_ERROR_NOTIFICATION,
      payload: { message: 'Could not get profile data.' },
    });
  }
};

export const hideNotification = () => ({
  type: ActionType.HIDE_NOTIFICATION,
});
