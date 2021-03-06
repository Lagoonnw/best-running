import { handleActions }  from 'redux-actions';
import { AppState }       from './root.reducer';
import { WorkoutActions } from '../actions/workouts';

export type State = Array<{ [k: string]: any }>;

const initialState: State = [];

export const reducer = handleActions({
  [WorkoutActions.set]: (state, action) => ( [...action.payload] )
}, initialState);

/*
 * Selectors
 * */
export const selectWorkouts = (state: AppState) => state.workouts;
