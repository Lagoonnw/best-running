import * as React        from "react";
import { Chart as C }    from "react-google-charts";
import { Workout }       from "../../models/Workout";
import { useState }      from "react";
import { sortDateTypes } from "../../constants/constants";
import { dateSort }      from "../../helpers/helpers";

export const Chart = (props: {workouts: Workout[]}) => {
  const [workouts] = useState(props.workouts);
  const workoutsToDisplay = dateSort(workouts, 'earliest').slice(0, 5).map((w: Workout) => ([
    `${w.getFormattedDate()}: ${w.workout_type}`, (w.distance / 1000)
  ]));
  
  return (
    <div className={"my-pretty-chart-container"}>
      <C
        chartType="ColumnChart"
        data={[
          ['Date and type', 'Km' ],...workoutsToDisplay
        ]}
        width="100%"
        height="500px"
        options={{
          title: 'The workout distance chart',
          chartArea: { width: '80%' },
          hAxis: {
            minValue: 0,
          },
          vAxis: {
            title: 'Distance in km',
            minValue: 0
          },
        }}
        legendToggle
      />
    </div>
  );
}
