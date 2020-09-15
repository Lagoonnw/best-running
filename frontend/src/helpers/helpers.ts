import { Workout } from "../models/Workout";

export const setProps = (props: { [x: string]: any; }, ctx: { [x: string]: any; }): void => {
  for (const k of Object.keys(props)) {
    ctx[k] = props[k];
  }
}

export const typeFilter = (workouts: Workout[], type: string): Workout[] =>
  workouts.filter((w: Workout) => w.workout_type === type);

export const distanceSort = (workouts: Workout[], type: string): Workout[] => (
  ( type === 'shortest' ) ?
  workouts.sort((a, b) => a.distance - b.distance) :
  workouts.sort((a, b) => b.distance - a.distance)
);

export const dateSort = (workouts: Workout[], type: string): Workout[] => (
  (type === 'earliest') ?
  workouts.sort((a, b) => a.date.getTime() - b.date.getTime()) :
  workouts.sort((a, b) => b.date.getTime() - a.date.getTime())
)

export const currentDateForForm = (): string => new Date()
  .toLocaleString('en-Gb', {year: 'numeric', month: 'numeric', day: 'numeric'})
  .split('/')
  .reverse()
  .join('-');

export default {
  setProps,
  typeFilter,
  distanceSort,
  dateSort
}
