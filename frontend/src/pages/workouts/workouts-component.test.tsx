import React                          from 'react';
import enzyme                         from 'enzyme';
import Adapter                        from 'enzyme-adapter-react-16';
import { shallow }                    from 'enzyme';
import {WorkoutsComponent}            from './workouts.component';
import { User }                       from '../../__mock__/data';
import { Action, ActionFunction1 }    from 'redux-actions';
import { Workout }                    from '../../models/Workout';
import { Filter }                     from '../../components/filter/filter';

enzyme.configure({adapter: new Adapter()});

const mockAction:ActionFunction1<Workout, Action<Workout>> = jest.fn();

describe('Workouts component test', () => {
  test('Should render with default state', () => {
    const [f, s] = User.workouts;
    const component = shallow(
      <WorkoutsComponent
        workouts={[f, s]}
        deleteWorkout={mockAction}
        getWorkouts={mockAction}
      /> );
    
    expect(component.state()).toEqual({
      workouts: [f, s],
      isOpen: false
    });
  });
  test('Should call onFilterChange and change state', () => {
    const component = shallow(
      <WorkoutsComponent
        workouts={User.workouts}
        deleteWorkout={mockAction}
        getWorkouts={mockAction}
      /> );
    //@ts-ignore  spyOn has troubles with arrow methods
    const spy = jest.spyOn(component.instance(), 'onFilterChange');
    component.update();
    component.instance().forceUpdate();
    const filter = component.find(Filter);
    filter.props().onChange({type: 'type', value: 'Walk'});
    
    expect(spy).toHaveBeenCalled();
    expect(component.state()).toEqual({
      isOpen: false,
      workouts: [User.workouts[4]]
    });
  });
})
