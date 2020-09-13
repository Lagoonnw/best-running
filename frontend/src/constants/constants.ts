export const BASE_API_URL = 'http://app-test.com/api';
export const workoutTypes = ['Walk', 'Bike', 'Running', 'Skiing'];
export const sortDateTypes = ['latest', 'earliest'];
export const sortDistanceTypes = ['longest', 'shortest'];
export const ApiEndpoints = {
  workouts: '/workouts'
};
export enum ResponseStatus {
  OK = 200,
  FORBIDDEN= 403,
  NOT_FOUND= 404,
  BAD_REQUEST= 400
}
