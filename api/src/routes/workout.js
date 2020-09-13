const {Router} = require('express');
const router = Router();
const Workout = require('../models/Workout');

// Получение списка тренеровок
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find({});
    console.log('WORKOUTS', workouts);
    res.status(201).json({workouts})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
});

router.post('/', async (req, res) => {
  console.log('POST WORKOUT', req.body);
  
  const w = new Workout({...req.body});
  // res.status(201).json(req.body)
  
  try {
    const workout = await w.save();
    res.status(201).json({workout})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
});


// Изменение задачи
router.put('/:id', async (req, res) => {
  try {
  
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
});

// Удаление задачи
router.delete('/:id', async (req, res) => {
  try {
  
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
});

module.exports = router;
