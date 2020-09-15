import React           from 'react';
import enzyme          from 'enzyme';
import Adapter         from 'enzyme-adapter-react-16';
import { shallow }     from 'enzyme';
import { User }        from "../../__mock__/data";
import { WorkoutList } from './workout-list';
import { WorkoutRow }  from "../workout-row/workout-row";

enzyme.configure({adapter: new Adapter()});

describe('Workout list test', () => {
  test('Should render one workout', () => {
    const component = shallow(<WorkoutList workouts={[User.workouts[0]]} deleteWorkout={jest.fn}/>);
    expect(component.find(WorkoutRow)).toHaveLength(1);
  });
  test('Should render five workout', () => {
    const component = shallow(<WorkoutList workouts={User.workouts} deleteWorkout={jest.fn}/>);
    expect(component.find(WorkoutRow)).toHaveLength(5);
  });
})
