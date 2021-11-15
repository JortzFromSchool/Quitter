const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Habit = require('../../models/Habit');

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

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newHabit = new Habit({
        name: req.body.name
      });
  
      newHabit.save().then(habit => res.json(habit));
    }
  );

module.exports = router;