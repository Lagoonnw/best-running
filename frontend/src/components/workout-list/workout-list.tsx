import React, { Fragment } from 'react';
import { Workout }         from "../../models/Workout";
import { WorkoutRow }      from "../workout-row/workout-row";

export const WorkoutList = (props: { workouts: Workout[], deleteWorkout: (w: Workout) => void }) => {
  
  return (
    <Fragment>
      {props.workouts.map((w: Workout, index: number) => (
          <WorkoutRow workout={w} index={index} key={w.id} deleteWorkout={props.deleteWorkout}/>
        )
      )}
    </Fragment>
  )
}
