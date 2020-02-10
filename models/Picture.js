const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required:true
    },
});

module.exports = Picture = mongoose.model('picture' , PictureSchema)