const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Group = require('../../models/Group');

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

      // Habit.findOne({name: req.body.name})
      //   .then(habit => {
      //     Group.findOne({habit_id: habit.id})
      //       .then(group => {
      //         if (group) {
      //           return res.status(400).json({name: `The group ${group.name} already contains this habit. To add that habit, join ${group.name} or give the habit a different name.`})
      //         }
      //       })
      //   })

      const newHabit = new Habit({
        name: req.body.name
      });
  
      newHabit.save();
      user.habits.push({_id: newHabit.id, name: newHabit.name});
      user.save();
      res.json(newHabit);
    }
  );

router.delete('/:habit_id/user/:user_id', async function(req, res, next){
  let user = await User.findOne({ _id: req.params.user_id }).then(user => user);
  for (let i = 0; i < user.habits.length; i++) {
    if (user.habits[i]._id === req.params.habit_id) {
      user.habits.splice(i, 1);
    }
  }
  Habit.findByIdAndRemove({_id: req.params.habit_id});
  user.save();
  res.json(user);
});

router.patch('/add_habit/:habit_id', 
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    let habit = await Habit.findOne({ _id: req.params.habit_id }).then(habit => habit);

    req.user.habits.push({ _id: habit.id, name: habit.name });
    req.user.save();
    res.json(req.user);
  });

router.patch('/remove_habit/:habit_id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {

    for (let i = 0; i < req.user.habits.length; i++) {
      if (req.user.habits[i]._id === req.params.habit_id) {
        req.user.habits.splice(i, 1);
      }
    }
    req.user.save();
    res.json(req.user);
  });

module.exports = router;