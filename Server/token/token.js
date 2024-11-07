const jwt = require('jsonwebtoken');

const generateToken = (email) => {
    const payload = {
        email: email
    };

    const secret = process.env.KEY;
    const options = {expiresIn: 300};

    return jwt.sign(payload, secret, options);
}

const verifyToken = (token) => {
    const secret = process.env.KEY;

    try {
        if(jwt.verify(token, secret)) {
            return true;
        }
    }
    catch(error) {
        return false;
    }
}

module.exports = {generateToken, verifyToken};