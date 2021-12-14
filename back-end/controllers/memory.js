const Memory = require('../models/memory');
const jwt = require('jsonwebtoken');
const switcher = require('../service/switcher');
const config = require('../service/config');
const weekOfYear = require('dayjs/plugin/weekOfYear');
const dayjs = require('dayjs');
dayjs.extend(weekOfYear);




// Middleware POST
exports.signup = (req, res, next) => {
    
    //  $$$$$$$$$$$$ récupération du token $$$$$$$$$$
    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, config.secretKey);
    const userId = decodedToken.tokenUID;

    const data = req.body;

    // il y a une semaine en trop sur le plugin, d'où le -1 (pour la const week)
    const week = (dayjs().week()) - 1;
    const monthNumber = dayjs().get('month');
    const dayNumber = dayjs().get('day');
    const dateAll = dayjs();
    let month = 'month_error';
    let day = 'day_error';


    const memory = new Memory({
        title: data.title,
        desc: data.desc,
        emoji: data.emoji,
        tags: [data.tags.tag1, data.tags.tag2],
        week,
        userId,
        date: {
            // switcher convertit les nombres des jours/mois en string 
            day: switcher.switchDay(dayNumber, day),
            month: switcher.switchMonth(monthNumber, month),
            year: `${dateAll.$y}`,
            dayNum: `${dateAll.$D}`,
            hour: `${dateAll.$H}`,
            minute: `${dateAll.$m}`,
            seconde: `${dateAll.$s}`
        }
    })
    memory.save()
        .then(() => res.status(201).json({ message: 'souvenir enregistré'}))
        .catch((err) => res.status(500).json({ message: 'erreur enregistrement souvenir ' + err}));
}

// Middleware GET All Weeks
exports.getAllWeeks = (req, res, next) => {

    //  $$$$$$$$$$$$ récupération du token $$$$$$$$$$
    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, config.secretKey);
    const userId = decodedToken.tokenUID;

    Memory.find({ userId })
        .then((memories) => res.status(200).json({ data: memories }))
        .catch((err) => res.status(404).json({ message: 'données introuvable ' + err}));
}

// Middleware GET WEEK
exports.getWeek = (req, res, next) => {

    //  $$$$$$$$$$$$ récupération du token $$$$$$$$$$
    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, config.secretKey);
    const userId = decodedToken.tokenUID;

    const week = req.body.weekNum;


    Memory.find({ userId, week })
        .then((memories) => res.status(200).json({ data: memories }))
        .catch((err) => res.status(404).json({ message: 'données introuvable ' + err}));
}

// Middleware check jour et existance souvenir
exports.getDay = (req, res, next) => {

    

}
