const User = require('../models/users');
const Memory = require('../models/memory');
const jwt = require('jsonwebtoken');
const config = require('../service/config');
const switcher = require('../service/switcher');
const dayjs = require('dayjs');



// Middleware check jour et existance souvenir
exports.getAccueil = (req, res, next) => {

    try {

        //  $$$$$$$$$$$$ récupération du token $$$$$$$$$$
        const userToken = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(userToken, config.secretKey);
        const userId = decodedToken.tokenUID;

        const dayNumber = dayjs().get('day');
        let dayString = null
        const jour = switcher.switchDay(dayNumber, dayString);


        User.findOne({ _id: userId })
            .then((data) => { res.status(200).json({ data: { jour, pseudo: data.pseudo } }); })
            .catch((err) => { res.status(500).json({ message: 'erreur récupération pseudo/jour ' + err }); });

    } catch(err) {
        res.status(500).json({ message: 'erreur switcher/pseudo/jour ' + err});
    }

}

exports.getState = (req, res, next) => {

    try {

        //  $$$$$$$$$$$$ récupération du token $$$$$$$$$$
        const userToken = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(userToken, config.secretKey);
        const userId = decodedToken.tokenUID;

        const day = dayjs().$D;
        const year = dayjs().$y;
        const monthNum = dayjs().get('month');
        let month = null;

        const synchron = async () => {
            return switcher.switchMonth(monthNum, month);
        }
        synchron()
            .then((monthReturned) => {

                Memory.findOne({ 
                    userId,
                    'date.dayNum': `${day}`,
                    'date.year': `${year}`,
                    'date.month': `${monthReturned}`
                    })
                    .then((data) => {
                        console.log(data);
                        res.status(200).json({ data });
                    })
                    .catch((err) => res.status(500).json({ message: err}));
            })
            .catch((err) => console.log('erreur de synchronisation ' + err));

    } catch (err) {
        console.log('erreur try catch ' + err);
    }
}