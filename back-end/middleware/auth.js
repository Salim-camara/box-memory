const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../service/config');


module.exports = (req, res, next) => {

    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, config.secretKey);
    const userId = decodedToken.tokenUID;
    
    try {
        User.findOne({ _id: userId })
        .then(() => {
            console.log('cet utilisateur a été authentifié'); 
            next();
        })
        .catch(() => console.log(`cet utilisateur n'existe pas`));
    } catch (err) {
        res.status(401).json({ error: err | 'Requête non authentifiée'});
    }
}