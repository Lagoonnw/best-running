import React, { Fragment } from 'react';
import { Workout }         from "../../models/Workout";
import { WorkoutRow }      from "../workout-row/workout-row";

export const WorkoutList = (props: { workouts: Workout[] }) => {
  
  return (
    <Fragment>
      {props.workouts.map((w: Workout, index: number) => (
          <WorkoutRow workout={w} index={index} key={w.id}/>
        )
      )}
    </Fragment>
  )
}
