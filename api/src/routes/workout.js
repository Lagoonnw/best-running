const {Router} = require('express');
const router = Router();
const Workout = require('../models/Workout');

// Получение списка тренеровок
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find({});
    res.status(201).json({workouts})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
});

router.post('/', async (req, res) => {
  const w = new Workout({...req.body});
  
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

// Удаление тренеровки
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const workout = await Workout.findByIdAndDelete(id);
    res.status(201).json({workout});
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
});

module.exports = router;
