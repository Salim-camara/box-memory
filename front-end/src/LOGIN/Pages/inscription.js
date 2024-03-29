import React, { useEffect, useState } from "react";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";
import axios from "axios";
import config from "../../service/config";
import { useHistory } from "react-router";
import ErrorOrientation from "../../HOME/Components/errorOrientation";


const Inscription = () => {

    const [pseudo, setPseudo] = useState(null);
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");

    const historique = useHistory();

    useEffect(() => {
        localStorage.clear();

        // controle width
        if(window.innerWidth > 800) {
            historique.push('/width');
        }
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();

        // Messages d'erreurs
        const errorPassword = document.querySelector('.error--password');
        errorPassword.innerHTML = 'Les deux mots de passe ne correspondent pas.';
        errorPassword.style.display = "none";

        const errorPseudo = document.querySelector('.error--pseudo');
        errorPseudo.innerHTML = 'Veuillez saisir un pseudo.';
        errorPseudo.style.display = "none";

        if(pseudo == null || pseudo == "") {

            errorPassword.style.display = "none";
            errorPseudo.style.display = "inline-block";
            
        } else if(password != check || password == null || password == "" ) {

            errorPseudo.style.display = "none";
            errorPassword.style.display = "block";
            
        } else {

            errorPseudo.style.display = "none"; 
            errorPassword.style.display = "none";

            axios.post(`${config.url}/inscription`, {
                pseudo,
                password
            })
                .then(() => {

                    axios.post(`${config.url}/connexion`, {
                        pseudo,
                        password
                    })
                        .then((data) => {
                            localStorage.setItem('token', data.data.token);
                            historique.push('/accueil');
                        })
                        .catch((err) => historique.push('/error'))
                })
                .catch((err) => {

                    const errorMsg = err.response.data.message;

                    if(errorMsg === 'Votre mot de passe doit contenir au moins 5 caractères.') {

                        errorPassword.innerHTML = `${errorMsg}`;
                        errorPassword.style.display = "block";

                    } else {

                        errorPseudo.innerHTML = `${errorMsg}`;
                        errorPseudo.style.display = "block";
                    }

                });
        } 

    }

    return(
        <div className="insc">

            <ErrorOrientation />
            <Navigation />
            <Logo />

            <form className="insc__form" onSubmit={ handleSubmit }>

                <div className="insc__form__pseudo">
                    <p className="p--insc">Entrez votre pseudo</p>
                    <input 
                        type="text" 
                        className="inp--insc" 
                        placeholder="Ex: Chrispyqueen62, Snow_white_my_queen, Poulette..."
                        value={ pseudo }
                        onChange={ (e) => setPseudo(e.target.value) }
                    />
                </div>
                <p className="error--pseudo">Veuillez saisir un pseudo.</p>

                <div className="insc__form__password">
                    <p className="p--insc">Mot de passe</p>
                    <input 
                    type="password" 
                    className="inp--insc" 
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>

                <div className="insc__form__check">
                    <p className="p--insc">Confirmez mot de passe</p>
                    <input 
                    type="password" 
                    className="inp--insc inp--check" 
                    value={ check }
                    onChange={ (e) => setCheck(e.target.value) }
                    />
                </div>

                <p className="error--password">Les deux mots de passe ne correspondent pas.</p>

                <div className="buttoncontainer">
                    <button className="buttoncontainer--button">C'est parti !</button>
                </div>    

            </form>

        </div>
    )
}

export default Inscription;