import Helper from './helpers';
import {User} from '../__mock__/data';

describe('Helpers test', () => {
  const [first, second] = User.workouts;
  test('filterType helper test', () => {
    expect(Helper.typeFilter(User.workouts, 'Walk')).toHaveLength(1);
    expect(Helper.typeFilter(User.workouts, 'Skiing')).toHaveLength(2);
    expect(Helper.typeFilter(User.workouts, '')).toHaveLength(0);
  });
  test('sortDate test', () => {
    expect(Helper.dateSort([first, second], 'latest')).toEqual([first, second]);
    expect(Helper.dateSort([first, second], 'earliest')).toEqual([second, first]);
    expect(Helper.dateSort([], 'earliest')).toEqual([]);
  });
  test('sortDistance test', () => {
    expect(Helper.distanceSort([first, second], 'longest')).toEqual([second, first]);
    expect(Helper.distanceSort([first, second], 'shortest')).toEqual([first, second]);
    expect(Helper.distanceSort([], 'shortest')).toEqual([]);
  })
})
