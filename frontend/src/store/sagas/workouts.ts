import { take, put, all, fork }        from 'redux-saga/effects';
import { setWorkouts, WorkoutActions } from '../actions/workouts';
import { api }                         from '../../services/api';
import { ApiEndpoints }                from '../../constants/constants';
import { Workout }                     from '../../models/Workout';
import { push }                        from 'connected-react-router';

function* loadWorkoutsFromApi() {
  const response = yield api.get(ApiEndpoints.workouts);
  const {workouts} = response.data;
  yield put(setWorkouts(workouts.map((w: any) => new Workout(w))));
}

function* getWorkouts() {
  while (true) {
    yield take(WorkoutActions.get);
    yield loadWorkoutsFromApi();
  }
}

function* addWorkout() {
  while (true) {
    const {payload} = yield take(WorkoutActions.post);
    yield api.post(ApiEndpoints.workouts, payload);
    yield loadWorkoutsFromApi();
    yield put(push('/'));
  }
}

function* deleteWorkout() {
  while (true) {
    const {payload} = yield take(WorkoutActions.delete);
    yield api.delete(`${ApiEndpoints.workouts}/${payload.id}`, payload);
    yield loadWorkoutsFromApi();
  }
}

export default function* workouts() {
  yield all([
    fork(getWorkouts),
    fork(deleteWorkout),
    fork(addWorkout)
  ])
}
