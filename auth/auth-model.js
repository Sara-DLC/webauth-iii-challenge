const db = require('../database/dbConfig.js');//check path

module.exports = {
    find,
    findById, 
    add,
    update,
    remove
}

function find () {
    return db('');
};

function findById (id) {
    return db('')
    .where('id', id)
    .first();
};

function add(newUser) {
    return db('')
    .insert(newUser)
    .then(ids => {
    return findById(ids[0]);
    });
}

function update(changes, id) {
    return db('')
    .where('id' , id)
    .update(changes)
    .then(count => {
    count > 0 ? findById(id) : null
    });
};

function remove (id) {
    return db('')
    .where('id' , id)
    .del();
};