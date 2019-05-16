const User = require('../models/users.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = (req,res) => {
    let body = req.body;
    User.findOne({ email: body.email }, (err, userDB) => {
        if(err)
            return res.status(500).json(err)
        
        if(!userDB)
            return res.status(400).json({
                ok: false,
                message: 'Usuario o contraseña incorrectos'
            });
        
        if (!bcrypt.compareSync(body.pass, userDB.pass)) {
            return res.status(400).json({
                err: {
                    ok: false,
                    message: 'usuario o contraseña incorrectos'
                }
            });
        }

        let token = jwt.sign({
            user: userDB
        }, process.env.SEED, { expiresIn: process.env.CAD_TOKEN });

        res.json({
            ok: true,
            email: userDB.email,
            name: userDB.name,
            id: userDB._id,
            token
        });
    });
}

module.exports = {login};