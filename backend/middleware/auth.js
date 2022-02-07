const jwt = require('jsonwebtoken');


function auth(req, res, next) {
    try {
        const token = req.cookies.token;

        // checking if token exists
        if(!token) return res.status(401).json({
            errorMessage: "Unauthorized"
        });

        //validating token
        const verified = jwt.verify(token, process.env.JWT_SECRET || "SECRET_KEY");
        req.user = verified.user;
        req.role = verified.role;
        next();

    } catch (error) {
        console.log("err: ", error);
        res.status(401).json({
            errorMessage: "Unauthorized"
        });
    }
}


module.exports = auth;