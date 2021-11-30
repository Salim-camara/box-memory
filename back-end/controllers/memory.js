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
    const testDate = 0;
    const testString = `${testDate.$y}-${testDate.$M}-${testDate.$D}`;
    let switchTest = 'Décembre';
    
    switch (testDate) {

        case 0: switchTest = 'Janvier';
        break;
        case 10: switchTest = 'Novembre';
        break;
        default: switchTest = 'Default';
    
    }
    console.log(switchTest);

    const memory = new Memory({
        title: data.title,
        desc: data.desc,
        emoji: data.emoji,
        tags: [data.tags.tag1, data.tags.tag2],
        date,
        test: {
            day: 'aujourdhui',
            month: () => {
                return ('hello');
            }
        }
    })
    memory.save()
        .then(() => res.status(201).json({ message: 'utilisateur créé'}))
        .catch((err) => res.status(409).json({ message: 'utilisateur non créé, pseudo déjà existant ' + err}));
}
