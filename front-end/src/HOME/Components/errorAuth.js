import React, { useEffect } from "react";
import { useHistory } from "react-router";



const ErrorAuth = () => {

    const historique = useHistory();

    useEffect(() => {

        localStorage.clear();
        setTimeout(() => {
            historique.push('/')
        }, 6000);
    }, [])



    return(
        <div className="error__auth">
            <h1 className="error__auth--title">Erreur d'authentification</h1>
            <h2 className="error__auth--text">Vous devez vous connecter pour accèder à l'application</h2>
            <p className="error__auth--redirection">Vous allez être automatiquement redirigez vers la page de connexion, si ça ne fonctionne pas,<strong style= {{color: '#61DAFBFF'}} onClick={() => historique.push('/')}><br />cliquez ici </strong></p>

        </div>
    )
}

export default ErrorAuth;