import { connect }             from "react-redux";
import { selectWorkouts }                    from "../../store/reducers/workouts.reducer";
import { ComponentState, WorkoutsComponent } from "./workouts.component"
import { RouteComponentProps }               from 'react-router';
import { AppState }                     from "../../store/reducers/root.reducer";
import { bindActionCreators, Dispatch } from 'redux';
import { deleteWorkout, getWorkouts }   from "../../store/actions/workouts";

export interface StateProps {
  workouts: any[]
}

export interface DispatchProps {
  getWorkouts: typeof getWorkouts,
  deleteWorkout: typeof deleteWorkout
}

export type TStateProps = StateProps & RouteComponentProps;

const mapStateToProps = (state: AppState, ownProps: any): TStateProps => ( {
  ...ownProps,
  workouts: selectWorkouts(state)
} );

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators({
  getWorkouts,
  deleteWorkout
}, dispatch);

//@ts-ignore
export default connect<TStateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(WorkoutsComponent);
