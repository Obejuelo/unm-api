const User = require('../models/users.model');
const bcrypt = require('bcrypt');

const create = async (req, res) => {
    let body = req.body;
    try {
        let result = await User.create({
            name: body.name,
            email: body.email,
            pass: bcrypt.hashSync(body.pass, 10)
        });
        res.json({message: 'Usuario creado'});
    } catch (err) {
        res.json(err);
    }
}

const update = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    
    try {
        let result = await User.findOneAndUpdate({ '_id': id }, body, { new: true, runValidators: true })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create
}