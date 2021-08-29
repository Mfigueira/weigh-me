import { ActionType } from '../action-types';
import { Weighing } from '../../models';

interface GetWeighingsAction {
  type: ActionType.SET_WEIGHINGS;
  payload: {
    weighings: Weighing[];
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
  | GetWeighingsAction
  | EditWeighingAction
  | DeleteWeighingAction;
