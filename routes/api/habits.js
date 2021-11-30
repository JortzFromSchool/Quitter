const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Habit = require('../../models/Habit');
const User = require('../../models/User');

router.get("/test", (req, res) => res.json({ msg: "This is the habits route" }));

// Get Habit Index
router.get('/', (req, res) => {
    Habit.find()
        .then(habits => res.json(habits))
        .catch(err => res.status(404).json({ nohabitsfound: 'No habits found'}));
});

router.get('/:id', (req, res) => {
    Habit.findById(req.params.id)
        .then(habit => res.json(habit))
        .catch(err =>
            res.status(404).json({ nohabitfound: 'No habit found with that ID' })
        );
});

router.post('/user/:user_id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      let user = await User.findOne({ _id: req.params.user_id }).then(user => user)

      const newHabit = new Habit({
        name: req.body.name
      });
  
      newHabit.save();
      user.habits.push({_id: newHabit.id, name: newHabit.name});
      user.save();
      res.json(user);
    }
  );

router.delete('/:habit_id/user/:user_id', async function(req, res, next){
  let user = await User.findOne({ _id: req.params.user_id }).then(user => user);
  const habit_index = user.habits.indexOf({_id: req.params.habit_id});
  res.json(habit_index);
  // user.habits.splice(habit_index, 1);
  // Habit.findByIdAndRemove({_id: req.params.habit_id});
  // user.save();
  // res.json(user);
});

module.exports = router;