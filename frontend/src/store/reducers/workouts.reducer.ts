import { User }          from '../../__mock__/data';
import { handleActions } from 'redux-actions';
import { AppState }      from "./root.reducer";
import { Workout }       from "../../models/Workout";

export type State = Array<{ [k: string]: any }>;

const initialState: State = [...User.workouts.map(w => new Workout(w))];

export const reducer = handleActions({}, initialState);

/*
 * Selectors
 * */

export const selectWorkouts = (state: AppState) => state.workouts;
