const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    pass: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
});

module.exports = mongoose.model('User', userSchema);