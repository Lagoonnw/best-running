import {createAction} from 'redux-actions';
import { Workout }    from "../../models/Workout";

export enum WorkoutActions {
  get = '[Workouts] get all workouts',
  set = '[Workouts] set workouts to store',
  post = '[Workouts] post one workout',
  delete = '[Workouts] delete one workouts'
}

export const getWorkouts = createAction(WorkoutActions.get);
export const setWorkouts = createAction(WorkoutActions.set, (payload: Workout[]) => payload);
export const deleteWorkout = createAction(WorkoutActions.delete, (payload: Workout) => payload);
