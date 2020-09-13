import { connect }             from "react-redux";
import { selectWorkouts }      from "../../store/reducers/workouts.reducer";
import { WorkoutsComponent }   from "./workouts.component"
import { RouteComponentProps } from 'react-router';
import { AppState }                     from "../../store/reducers/root.reducer";
import { bindActionCreators, Dispatch } from 'redux';
import {getWorkouts}                    from "../../store/actions/workouts";

export interface State {
  workouts: any[]
}

export type TState = State & RouteComponentProps;

const mapStateToProps = (state: AppState, ownProps: any): TState => ( {
  ...ownProps,
  workouts: selectWorkouts(state)
} );

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  getWorkouts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsComponent);
