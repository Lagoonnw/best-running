import React       from 'react';
import { Workout } from "../../models/Workout";
import { Button }  from "reactstrap";

export const WorkoutRow = (props: { workout: Workout; index: number; deleteWorkout: (w: Workout) => void }) => {
  const {workout, index, deleteWorkout} = props;
  const onDeleteClick = () => deleteWorkout(workout);
  
  return ( <tr>
    <th scope="row">
      {index + 1}
    </th>
    <td>
      {workout.workout_type}
    </td>
    <td>
      {workout.getDistance()}
    </td>
    <td>
      {workout.getFormattedDate()}
    </td>
    <th>
      <Button tag="button" color="danger" outline onClick={onDeleteClick}>Delete</Button>
    </th>
  </tr> )
}
