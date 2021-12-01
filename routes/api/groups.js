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

router.patch('/add_user/:user_id/group/:group_id', async (req, res) => {

    let user = await User.findOne({ _id: req.params.user_id }).then(user => user)
    
    let group = await Group.findOne({ _id: req.params.group_id }).then(group => group)
    group.users.push({ _id: user.id, handle: user.handle })
    group.save()
    user.groups = user.groups.concat({ _id: group.id, name: group.name })
    user.save()
    res.json(group)
})

router.patch('/remove_user/:user_id/group/:group_id', async (req, res) => {
  let user = await User.findOne({ _id: req.params.user_id }).then(user => user)
  let group = await Group.findOne({ _id: req.params.group_id }).then(group => group)
  for (let i = 0; i < group.users.length; i++) {
    if (req.params.group_id === group.users[i]._id) {
      group.users.splice(i, 1)
    }
  }
  // const user_index = group.users.indexOf({ _id: user.id, handle: user.handle })
  // group.users.splice(user_index, 1)
  group.save()
  // const group_index = user.groups.indexOf({ _id: req.params.group_id })
  // res.json(group_index);
  for (let i = 0; i < user.groups.length; i++) {
    if (req.params.user_id === user.groups[i]._id) {
      user.groups.splice(i, 1)
    }
  }
  // user.groups.splice(group_index, 1)
  user.save()
  // res.json(group)
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
  
      newGroup.save().then(req.user.groups.push({_id: newGroup.id, name: newGroup.name}));
      req.user.save();
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