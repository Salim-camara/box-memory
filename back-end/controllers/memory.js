const Memory = require('../models/memory');
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');

// Middlexare d'inscription
exports.signup = (req, res, next) => {

    const memory = new Memory({
        pseudo: 'testPseudo',
        password: ('testPassword')
    })
    memory.save()
        .then(() => res.status(201).json({ message: 'utilisateur créé'}))
        .catch((err) => res.status(409).json({ message: 'utilisateur non créé, pseudo déjà existant ' + err}));
}
