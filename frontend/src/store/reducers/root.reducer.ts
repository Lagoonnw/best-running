import { combineReducers, Reducer }                         from 'redux';
import { connectRouter, LocationChangeAction, RouterState } from 'connected-react-router';
import { History }                                          from 'history';
import { reducer as workouts, State as WorkoutsState }      from './workouts.reducer';

export interface AppState {
  router: Reducer<RouterState, LocationChangeAction>,
  workouts: WorkoutsState
}

export const reducer = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    workouts
  })
};
