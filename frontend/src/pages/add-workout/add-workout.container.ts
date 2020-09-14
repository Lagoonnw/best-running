import {connect}                        from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {addWorkout}                     from '../../store/actions/workouts';
import { AddWorkoutComponent }          from "./add-workout.component";
import { AppState }                     from "../../store/reducers/root.reducer";

const mapStateToProps = (state: any, ownProps: any) => ({
  ...state,
  ...ownProps
});
const mapDispatchToProps = (dispatch: Dispatch)  => bindActionCreators({
  addWorkout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutComponent);
