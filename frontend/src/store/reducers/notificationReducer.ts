import { Notification } from '../../models';
import { ActionType } from '../action-types';
import { NotificationAction } from '../actions';

const defaultState: Notification = {
  open: false,
  message: '',
  severity: 'success',
};

const notificationReducer = (
  state = defaultState,
  action: NotificationAction
): Notification => {
  if (action.type === ActionType.SHOW_SUCCESS_NOTIFICATION) {
    return {
      open: true,
      message: action.payload.message,
      severity: 'success',
    };
  }

  if (action.type === ActionType.SHOW_ERROR_NOTIFICATION) {
    return {
      open: true,
      message: action.payload.message,
      severity: 'error',
    };
  }

  if (action.type === ActionType.HIDE_NOTIFICATION) {
    return {
      ...state,
      open: false,
    };
  }

  return state;
};

export default notificationReducer;
