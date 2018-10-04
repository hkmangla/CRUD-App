const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    accessibleCategories: []

});

const CrudUser = module.exports = mongoose.model('crudUser', UserSchema);

module.exports.addUser = (user, callback) => {
  user.save(callback);
};

module.exports.findUser = (username, callback) => {
  CrudUser.findOne({username: username}, callback);
};

module.exports.checkCredentials = (username, password, callback) => {
    CrudUser.findOne({
        $and: [
            {username: username},
            {password: password}
        ]
    }, callback);
};

