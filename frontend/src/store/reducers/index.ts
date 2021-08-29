import { combineReducers } from 'redux';
import weighingsReducer from './weighingsReducer';

const reducers = combineReducers({
  weighings: weighingsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
