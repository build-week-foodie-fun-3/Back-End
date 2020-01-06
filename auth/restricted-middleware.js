const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(req.headers)

    if (authorization) {
        const secret = process.env.JWT_SECRET || "The secret sauce, that seems, secret";

        jwt.verify(authorization, secret, function(err, decodedToken) {
            if (err) {
                res
                .status(401)
                .json({ message: "You shall not pass!"})
            } else {
                req.token = decodedToken
                next();
            }
        });
    } else {
        res
        .status(400)
        .json({ message: "Please login and try again."})
    }
};