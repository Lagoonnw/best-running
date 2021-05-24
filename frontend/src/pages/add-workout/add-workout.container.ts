import {connect}                        from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {addWorkout}                     from '../../store/actions/workouts';
import { AddWorkoutComponent }          from "./add-workout.component";

const mapStateToProps = (state: any, ownProps: any) => ({
  ...state,
  ...ownProps
});
const mapDispatchToProps = (dispatch: Dispatch)  => bindActionCreators({
  addWorkout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutComponent);
