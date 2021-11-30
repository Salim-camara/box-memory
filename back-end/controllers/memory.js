const Memory = require('../models/memory');
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');
const weekOfYear = require('dayjs/plugin/weekOfYear');
const dayjs = require('dayjs');
dayjs.extend(weekOfYear);

// Middleware POST
exports.signup = (req, res, next) => {


    const data = req.body;
    const date = Date();
    const newDate = dayjs('2021-11-30').week();
    const testDate = dayjs();
    const testString = `${testDate.$y}`;

    // const testFonction = () => {
    //     return(`${testDate.$y}`)
    // }

    console.log(testDate, testString);

    const memory = new Memory({
        title: data.title,
        desc: data.desc,
        emoji: data.emoji,
        tags: [data.tags.tag1, data.tags.tag2],
        date: date
    })
    memory.save()
        .then(() => res.status(201).json({ message: 'utilisateur créé'}))
        .catch((err) => res.status(409).json({ message: 'utilisateur non créé, pseudo déjà existant ' + err}));
}
