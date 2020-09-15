import React                   from 'react';
import enzyme                  from 'enzyme';
import Adapter                 from 'enzyme-adapter-react-16';
import { shallow }             from 'enzyme';
import { AddWorkoutComponent } from "./add-workout.component";
import { Form }                from "reactstrap";

enzyme.configure({adapter: new Adapter()});

describe('Add workout component test', () => {
  test('Should render component', () => {
    const component = shallow(<AddWorkoutComponent/>);
    expect(component.find(Form)).toBeTruthy();
  });
})
