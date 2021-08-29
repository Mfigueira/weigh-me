import { Dispatch } from 'redux';
import { Weighing } from '../../models';
import { getWeighings } from '../../util/http';
import { ActionType } from '../action-types';
import { WeighingsAction } from '../actions';

export const setWeighings =
  (token: string) => async (dispatch: Dispatch<WeighingsAction>) => {
    let weighings: Weighing[] = [];
    try {
      const { data } = await getWeighings(token);
      weighings = data;
    } catch (err) {
      // onLogout();
      // onErrorAlert('Could not get weighings data');
    } finally {
      dispatch({
        type: ActionType.SET_WEIGHINGS,
        payload: {
          weighings,
        },
      });
    }
  };
