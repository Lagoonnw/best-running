import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow}   from 'enzyme';
import {PageTitle} from "./page-title";

enzyme.configure({ adapter: new Adapter() });

test('Should render title', () => {
  const component = shallow(<PageTitle>Hello</PageTitle>);
  expect(component.find('h1')).toBeTruthy();
})
