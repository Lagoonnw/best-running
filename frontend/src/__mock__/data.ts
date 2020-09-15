import { Workout }  from '../models/Workout';

export const User = {
  id: '123456',
  email: 'test@email.com',
  workouts: [
    new Workout({
      id: '123456',
      workout_type: 'Skiing',
      distance: 780,
      date: new Date(2020, 9,1)
    }),
    new Workout({
      id: '128556',
      workout_type: 'Skiing',
      distance: 7850,
      date: new Date(2019, 12,1)
    }),
    new Workout({
      id: '459321',
      workout_type: 'Running',
      distance: 1780,
      date: new Date(2020, 8,1)
    }),
    new Workout({
      id: '563547',
      workout_type: 'Bike',
      distance: 17780,
      date: new Date(2020, 4,1)
    }),
    new Workout({
      id: '563589',
      workout_type: 'Walk',
      distance: 17780,
      date: new Date(2020, 4,1)
    })
  ]
};
