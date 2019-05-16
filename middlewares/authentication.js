const jwt = require('jsonwebtoken');

const verifyToken = (req, res) => {
    let token = req.body.token;

    jwt.verify(token, process.env.SEED, (err, decode) => {
        if(err)
            res.status(401).json({message: 'Invalid token'});

        req.user = decode;
        next();
    });
}

module.exports = {verifyToken}