import React              from 'react';
import enzyme             from 'enzyme';
import Adapter            from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import { User }           from "../../__mock__/data";
import { WorkoutRow }     from "./workout-row";

enzyme.configure({adapter: new Adapter()});

describe('Work-row component test', () => {   
  test('Should render component', () => {
    const component = shallow(<WorkoutRow workout={User.workouts[0]} index={0} deleteWorkout={jest.fn}/>)
    expect(component.find('tr th.row')).toBeTruthy();
  });
  test('Should call a button click handler', () => {
    const fn = jest.fn();
    const component = mount(
      <table>
        <tbody><WorkoutRow workout={User.workouts[0]} index={0} deleteWorkout={fn}/></tbody>
      </table>
    );
    const btn = component.find('.btn-outline-danger');
    btn.simulate('click');
    expect(fn).toHaveBeenCalled();
  })
})
