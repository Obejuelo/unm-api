const mongoose = require('mongoose');
const uploader = require('./Uploader');

let Schema = mongoose.Schema;

let noticeSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El title es necesario'],
        unique: true
    },
    info: {
        type: String,
        required: [true, 'El info es necesario']
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: [true, 'El date es necesario']
    }
});

noticeSchema.methods.updateImage = function(path) {
    return uploader(path)
        .then(secure_url => {
            this.image = secure_url;
            return this.save();
        })
}

module.exports = mongoose.model('Notice', noticeSchema);

