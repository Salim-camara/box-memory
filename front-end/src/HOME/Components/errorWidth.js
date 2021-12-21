import React from "react";



const ErrorWidth = () => {

    return(
        <div className="error__auth">
            <h1 className="error__auth--title">L'application fonctionne uniquement sur téléphone</h1>
            <p className="error__auth--text">Votre appareil ne respecte pas les dimenssions nécessaire au bon fonctionnement de l'application. <br />Veuillez utiliser soit une petite tablette, soit un téléphone.</p>

        </div>
    )
}

export default ErrorWidth;