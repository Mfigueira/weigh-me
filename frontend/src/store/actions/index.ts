import { ActionType } from '../action-types';
import { AuthUser, Weighing } from '../../models';

interface InitHttpRequestAction {
  type: ActionType.INIT_HTTP_REQUEST;
}

interface SetWeighingsAction {
  type: ActionType.SET_WEIGHINGS;
  payload: {
    weighings: Weighing[];
  };
}

interface AddWeighingAction {
  type: ActionType.ADD_WEIGHING;
  payload: {
    weighing: Weighing;
  };
}

interface EditWeighingAction {
  type: ActionType.EDIT_WEIGHING;
  payload: {
    weighing: Weighing;
  };
}

interface DeleteWeighingAction {
  type: ActionType.DELETE_WEIGHING;
  payload: {
    id: number;
  };
}

export type WeighingsAction =
  | InitHttpRequestAction
  | SetWeighingsAction
  | AddWeighingAction
  | EditWeighingAction
  | DeleteWeighingAction;

interface ShowSuccessNotificationAction {
  type: ActionType.SHOW_SUCCESS_NOTIFICATION;
  payload: {
    message: string;
  };
}

interface ShowErrorNotificationAction {
  type: ActionType.SHOW_ERROR_NOTIFICATION;
  payload: {
    message: string;
  };
}

interface HideNotificationAction {
  type: ActionType.HIDE_NOTIFICATION;
}

export type NotificationAction =
  | ShowSuccessNotificationAction
  | ShowErrorNotificationAction
  | HideNotificationAction;

interface AuthenticateUserAction {
  type: ActionType.AUTHENTICATE_USER;
  payload: {
    user: AuthUser;
  };
}

interface LogoutUserAction {
  type: ActionType.LOGOUT_USER;
}

export type AuthAction =
  | InitHttpRequestAction
  | AuthenticateUserAction
  | LogoutUserAction;
