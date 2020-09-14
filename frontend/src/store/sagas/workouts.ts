import { take, put, all, fork }        from 'redux-saga/effects';
import { setWorkouts, WorkoutActions } from "../actions/workouts";
import { api }                         from "../../services/api";
import { ApiEndpoints }                from "../../constants/constants";
import { Workout }                     from "../../models/Workout";

function* getWorkouts() {
  while (true) {
    yield take(WorkoutActions.get);
    const response = yield api.get(ApiEndpoints.workouts);
    const {workouts} = response.data;
    yield put(setWorkouts(workouts.map((w: any) => new Workout(w))));
  }
}

function* deleteWorkout() {
  while (true) {
    const {payload} = yield take(WorkoutActions.delete);
    console.log('delete saga', payload);
    const r = yield api.delete(`${ApiEndpoints.workouts}/${payload.id}`, payload);
    console.log('deleted', r);
    const response = yield api.get(ApiEndpoints.workouts);
    const {workouts} = response.data;
    yield put(setWorkouts(workouts.map((w: any) => new Workout(w))));
  }
}

export default function* workouts() {
  yield all([
    fork(getWorkouts),
    fork(deleteWorkout)
  ])
}
