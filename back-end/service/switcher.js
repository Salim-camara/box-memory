exports.switchDay = (e, f) => {

    switch (e) {

        case 0: f = 'dimanche';
        break;
        case 1: f = 'lundi';
        break;
        case 2: f = 'mardi';
        break;
        case 3: f = 'mercredi';
        break;
        case 4: f = 'jeudi';
        break;
        case 5: f = 'vendredi';
        break;
        case 6: f = 'samedi';
        break;
        default: f = 'day_error';

    }
    return (f);

}

exports.switchMonth = (e, f) => {

    switch (e) {

        case 0: f = 'janvier';
        break;
        case 1: f = 'février';
        break;
        case 2: f = 'mars';
        break;
        case 3: f = 'avril';
        break;
        case 4: f = 'mai';
        break;
        case 5: f = 'juin';
        break;
        case 6: f = 'juillet';
        break;
        case 7: f = 'août';
        break;
        case 8: f = 'septembre';
        break;
        case 9: f = 'octobre';
        break;
        case 10: f = 'novembre';
        break;
        case 11: f = 'décembre';
        break;
        default: f = 'month_error';
    
    }
    return (f);
}