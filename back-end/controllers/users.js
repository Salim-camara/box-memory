const User = require('../models/users');
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');
const config = require('../service/config');

// Middlexare d'inscription
exports.signup = (req, res, next) => {

    const pseudo = req.body.pseudo;
    const password = req.body.password;

    let allRegexTest = true;

    for(const rule of config.pseudoRegex) {

        if(rule.regex.test(pseudo) === true) {

            res.status(400).json({ message: rule.error });
            allRegexTest = false;

        } else if(pseudo.length < 3) {

            res.status(400).json({ message: 'Votre pseudo doit contenir au moins 3 caractères.' });
            allRegexTest = false;

        }
        else if(password.length < 5) {

            res.status(400).json({ message: 'Votre mot de passe doit contenir au moins 5 caractères.'});
            allRegexTest = false;
        }
    }


    if (allRegexTest === true) {

        bcrypt.hash(req.body.password, 10)
            .then((hash) => {
                const user = new User({
                    pseudo,
                    password: hash
                })
                user.save()
                    .then(() => res.status(201).json({ message: 'utilisateur créé'}))
                    .catch(() => res.status(409).json({ message: 'Ce pseudo est déjà pris, veuillez en saisir un autre.'}));
            })
            .catch((err) => res.status(500).json({ message: 'bcrypt error '+ err }))

    } else {
        res.status(500).json({ message: 'erreur regex' });
    }

}

// Middleware de connexion
module.exports.signin = (req, res, next) => {

    const pseudo = req.body.pseudo;
    const password = req.body.password;

    User.findOne({pseudo})
        .then((user) => {

            bcrypt.compare(password, user.password)
                .then((passswordState) => {

                    if(!passswordState) {

                        res.status(401).json({ message: 'Mot de passe incorrect.' })

                    } else {

                        const userId = user._id;
                        res.status(200).json({
                            userId,
                            token: token.sign(
                                { tokenUID: userId },
                                config.secretKey,
                                { expiresIn: config.tokenTTL }
                            ) 
                        });
                    }
                })
                .catch((err) => res.status(500).json({ message: 'bcrypt error ' + err }));
        })
        .catch((err) => res.status(404).json({ message: `Ce pseudo n'existe pas.`}));
}

