const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const verifyToken = (req, res) => {
    let token = req.body.token;

    jwt.verify(token, process.env.SEED, (err, decode) => {
        if(err)
            res.status(401).json({message: 'Invalid token'});

        req.user = decode;
        next();
    });
}

const verifyPassword = (req, res, next) => {
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
        req.user = userDB;
        next();
    });

}

module.exports = {verifyToken, verifyPassword}