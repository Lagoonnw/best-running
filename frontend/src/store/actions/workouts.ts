import {createAction} from 'redux-actions';

export enum WorkoutActions {
  get = '[Workouts] get all workouts',
  set = '[Workouts] set workouts to store',
  post = '[Workouts] post one workout',
  delete = '[Workouts] delete one workouts'
}

export const getWorkouts = createAction(WorkoutActions.get);
export const setWorkouts = createAction(WorkoutActions.set, (payload: any) => payload);
