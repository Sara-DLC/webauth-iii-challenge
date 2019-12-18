const router = require("express").Router();

const Users = require("./users-model");
const { restricted, checkRole} = require("../middleware/restricted-middleware");

router.get("/", restricted, checkRole('finance'), (req, res) => {
    Users.find()
    .then(users => {
    res.json(users);
    })
    .catch(err => res.send(err));
});



module.exports = router;