import { User }          from '../../__mock__/data';
import { handleActions } from 'redux-actions';
import { AppState }      from "./root.reducer";

export type State = Array<{ [k: string]: any }>;

const initialState: State = [...User.workouts];

export const reducer = handleActions({}, initialState);

/*
 * Selectors
 * */

export const selectWorkouts = (state: AppState) => state.workouts;
