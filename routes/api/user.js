const express = require('express');
const Router = express.Router();

const {
  validate,
  validateAddUser
} = require('../../middlewares/checkValidator');
const User = require('../../models/User');
// const Picture = require('../../models/Picture');

//@Route    POST api/user/adduser
//@desc     Add User
//@access   Public
Router.post('/adduser', validateAddUser(), validate, async (req, res) => {
  const { name, surName, birthYear, birthPlace } = req.body;
  try {
    const newUser = new User({ name, surName, birthYear, birthPlace });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

//@Route    GET api/user
//@desc     get User
//@access   Public
Router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send(error.message);
  }
});

//@Route    GET api/user/:id
//@desc     get User by id
//@access   Public
Router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    //Check for ObjectId format
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !user) {
      return res.status(400).json({ msg: 'User not Found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@Route    PUT api/user/:id
//@desc     edit User
//@access   Private
Router.put('/:id', async (req, res) => {
  const user = { name, surName, birthYear, birthPlace } = req.body;
  try {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.json({ msg: 'User Updated'});
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

//@Route    DELETE api/user/:id
//@desc     delete User
//@access   Private
Router.delete('/:id', async(req, res) =>{
try {
  //Delete User Pictures
  await Picture.deleteMany({ user: req.params.id});
  //Delete User
  await User.findOneAndRemove({ _id: req.params.id});
res.json({msg: 'User Removed'});
} catch (error) {
  console.error(err.message);
    res.status(500).send('Server Error');
}
})



module.exports = Router;
