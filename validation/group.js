const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGroupAdmission(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }


};

// router.patch('/add_user', async (req, res) => {
//     const { errors, isValid } = validateAddUserInput(req.body);

//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     let user = await User.findOne({ _id: req.body.user_id }).then(user => user)
    
//     let group = await Group.findOne({ _id: req.body.group_id }).then(group => group)
//     group.users.push({ _id: user.id, username: user.username, avatar: user.avatar })
//     group.save()
//     res.json(group)

// })