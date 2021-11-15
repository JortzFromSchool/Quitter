const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Log = require('../../models/Log');

router.get('/', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    Log.find()
        .sort({ date: -1 })
        .then(logs => res.json(logs))
        .catch(err => res.status(404).json({nologsfound: 'No logs found'}));
});

router.get('/user/:user_id', (req, res) => {
    Log.find({user: req.params.user_id})
        .then(logs => res.json(logs))
        .catch(err => 
            res.status(404).json({ nologsfound: 'No logs found from that user' }));
});

router.get('/:id', (req, res) => {
    Log.findById(req.params.id)
        .then(log => res.json(log))
        .catch(err =>
            res.status(404).json({ nologfound: 'No log found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newLog = new Log({
        description: req.body.description,
        user: req.user.id,
        habit: req.habit.id
      });
  
      newLog.save().then(log => res.json(log));
    }
  );

router.delete('/:id', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    Log.findOneAndRemove({_id: req.params.id}, (err) => {
      res.status(404).json({ nologsfound: 'No logs found from that user' });
    })
});

module.exports = router;