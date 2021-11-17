const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Group = require('../../models/Group');
const User = require('../../models/User');

router.get('/', (req, res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(404).json({ nogroupsfound: 'No groups found'}));
});

router.get('/:id', (req, res) => {
    Group.findById(req.params.id)
        .then(group => res.json(group))
        .catch(err =>
            res.status(404).json({ nogroupfound: 'No group found with that ID' })
        );
});

router.patch('/add_user', async (req, res) => {

  let user = await User.findOne({ _id: req.body.user_id }).then(user => user)
  
  let group = await Group.findOne({ _id: req.body.group_id }).then(group => group)
  group.users = group.users.concat({ _id: user.id, handle: user.handle })
  group.save()
  user.groups = user.groups.concat({ _id: group.id, name: group.name })
  user.save()
  res.json(group)
})


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newGroup = new Group({
        name: req.body.name,
        habitId: req.body.habitId,
        users: [{ _id: req.user.id, handle: req.user.handle }],
        admin: req.user.id
      });
  
      newGroup.save().then(group => res.json(group));
    }
  );

router.delete('/:id', function(req, res, next){
  Group.findByIdAndRemove({_id: req.params.id}).then(function(group){
    res.send(group);
  });
});

router.put('/:id', function(req, res){
  Group.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Group.findOne({_id: req.params.id}).then(function(group){
      res.send(group);
    });
  });
});

module.exports = router;