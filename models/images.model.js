const mongoose = require('mongoose');
const uploader = require('./Uploader');

const Schema = mongoose.Schema;

let imageSchema = new Schema({
    description : {
        type: String,
        required: [true, 'La descripcion es necesaria'],
    },
    image: String
});

imageSchema.methods.updateImage = function(path) {
    return uploader(path)
        .then(secure_url => {
            this.image = secure_url;
            return this.save();
        });
}

module.exports = mongoose.model('Image', imageSchema);