import { connect }           from "react-redux";
import { selectWorkouts }    from "../../store/reducers/workouts.reducer";
import { WorkoutsComponent } from "./workouts.component"
import { RouteComponentProps }                  from 'react-router';

export interface State {
  workouts: any[]
}

export type TState = State & RouteComponentProps;

//@ts-ignore
const mapStateToProps = (state, ownProps): TState => ( {
  workouts: selectWorkouts(state)
} )

export default connect(mapStateToProps, null)(WorkoutsComponent);
