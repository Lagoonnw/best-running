import React     from 'react';
import enzyme    from 'enzyme';
import Adapter   from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {User}    from "../../__mock__/data";
import { Chart } from "./chart";

enzyme.configure({ adapter: new Adapter() });

test('Should render a Chart component', () => {
  const component = shallow(<Chart workouts={User.workouts}/>);
  expect(component.find('.my-pretty-chart-container')).toBeTruthy();
})
