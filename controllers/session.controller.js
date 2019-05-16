const jwt = require('jsonwebtoken');

const session = (req, res) => {
    let token = req.body.token;

    jwt.verify(token, process.env.SEED, (err, decode) => {
        if(err)
            res.status(401).json({ok: false, message: 'Invalid token'});

        res.json({
            ok: true,
            decode
        });
    });
}

module.exports = {session}