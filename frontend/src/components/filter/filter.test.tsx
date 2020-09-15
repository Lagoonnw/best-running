import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow}   from 'enzyme';
import {Filter} from './filter';

enzyme.configure({ adapter: new Adapter() });

describe('Filter component test', () => {
  const component = shallow(<Filter onChange={jest.fn()}><div className={'test'}/></Filter>);
  test('Should render component', () => {
    expect(component.find('.dropdown-menu')).toBeTruthy();
  });
  test('Should render children', () => {
    expect(component.find('div.test')).toBeTruthy();
  });
});
