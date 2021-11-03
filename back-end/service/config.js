module.exports = {

    // REGEX de pseudo
    pseudoRegex = [
        {
            regex: /$&+,:;=?@#|'<>.^*()%!-/,
            error: 'Votre pseudo ne doit pas contenir de caractères spéciaux'
        },
        {
            regex: /^\s+$/,
            error: `Votre pseudo ne doit pas contenir d'espace`
        },
        {
            regex: /.{3,}/,
            error: `Votre pseudo doit contenir au moins 3 caractères`
        }
    ],

    passwordRegex = [
        {
            regex: /.{5,}/,
            error: `Votre mot de passe doit contenir au moins 5 caractères`
        }
    ]
}