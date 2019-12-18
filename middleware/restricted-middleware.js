const jwt = require("jsonwebtoken");

module.exports = (req, res, next) {

}


//role validation middleware
module.exports = function checkRole(role) {
return function(req, res, next) {
    if (req.token && role === req.token.role) {
    next();
    } else {
    res
        .status(403)
        .json({ message: `Unauthorized to use this resource, you must be an ${role}` });
        }
    };
}