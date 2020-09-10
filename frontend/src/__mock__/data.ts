export const User = {
  id: '123456',
  email: 'test@email.com',
  workouts: [
    {
      id: '123456',
      type: 'walk',
      distance: 780,
      date: new Date(2020, 9,1).toISOString()
    },
    {
      id: '459321',
      type: 'run',
      distance: 1780,
      date: new Date(2020, 8,1).toISOString()
    },
    {
      id: '563547',
      type: 'bike',
      distance: 17780,
      date: new Date(2020, 8,1).toISOString()
    }
  ]
}
