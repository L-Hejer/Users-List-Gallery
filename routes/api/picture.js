const express = require('express');
const Router = express.Router();

const {
  validate,
  validatePictureAdd
} = require('../../middlewares/checkValidator');
// const User = require('../../models/User');
const Picture = require('../../models/Picture');

//@Route    POST api/picture
//@desc     Add Picture
//@access   Public
Router.post('/:id', validatePictureAdd(), validate, async (req, res) => {
  const pictureFields = {};
  const { title, link } = req.body;
  pictureFields.user = req.params.id;
  if (title) pictureFields.title = title;
  if (link) pictureFields.link = link;
  try {
    picture = new Picture(pictureFields);
    await picture.save();
    res.json(picture);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@Route    GET api/picture/:id
//@desc     Get Picture by user id
//@access   Public
Router.get('/:id', async (req, res) => {
  try {
    const gallery = await Picture.find({ user: req.params.id }).populate(
        'gallery',
        ['title', 'link']
      );
    res.json(gallery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@Route    DELETE api/picture/:id
//@desc     remove Picture by picture id
//@access   Public
Router.delete('/:id', async (req, res) => {
    try {
        await Picture.findOneAndRemove({ _id: req.params.id});
        res.json({msg: 'Picture Removed'});
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
})

module.exports = Router;
