import {fork, all}      from 'redux-saga/effects';
import workouts from './workouts';

export function* root() {
  yield all([
    fork(workouts)
  ]);
}
