import React       from 'react';
import { Workout } from "../../models/Workout";
import {Button}    from "reactstrap";

export const WorkoutRow = (props: { workout: Workout; index: number }) => {
  const {workout, index} = props;
  
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
      <Button tag="button" color="primary">Edit</Button>
      <Button tag="button" color="danger" outline>Delete</Button>
    </th>
  </tr> )
}
