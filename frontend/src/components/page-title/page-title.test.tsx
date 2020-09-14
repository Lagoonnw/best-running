import React from 'react';
import {shallow}   from 'enzyme';
import {PageTitle} from "./page-title";

test('Should render title', () => {
  const component = shallow(<PageTitle>Hello</PageTitle>);
  expect(component.find('<h1>')).toBeTruthy();
})
