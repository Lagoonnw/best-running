export const BASE_API_URL = 'http://127.0.0.1:80/api';
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
