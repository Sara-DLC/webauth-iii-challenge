const router = require("express").Router();

const Users = require("./users-model.js");
const { restricted, checkRole} = require("../auth/restricted-middleware.js");

router.get("/", restricted, checkRole('finance'), (req, res) => {
    Users.find()
    .then(users => {
    res.json(users);
    })
    .catch(err => res.send(err));
});



module.exports = router;