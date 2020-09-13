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
    console.log('SAGA', workouts);
    
    yield put(setWorkouts(workouts.map((w: any) => new Workout(w))));
    
  }
}

export default function* workouts() {
  yield all([
    fork(getWorkouts)
  ])
}
