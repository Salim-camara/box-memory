module.exports = {

    // REGEX de pseudo
    pseudoRegex: [
        {
            regex: /(?=.*[@#$%^&*=<>/])/,
            error: 'Votre pseudo ne doit pas contenir de caractères spéciaux'
        }
    ],

    // token
    secretKey: 'application_pour_marine',
    tokenTTL: '72h'

}