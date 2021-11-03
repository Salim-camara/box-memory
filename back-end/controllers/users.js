const User = require('../models/users');
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');

// Middlexare d'inscription
exports.signup = (req, res, next) => {

    const user = new User({
        pseudo: 'testPseudo',
        password: ('testPassword')
    })
    user.save()
        .then(() => res.status(201).json({ message: 'utilisateur créé'}))
        .catch((err) => res.status(409).json({ message: 'utilisateur non créé, pseudo déjà existant ' + err}));
}

