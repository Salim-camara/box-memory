import React, { useEffect, useState } from "react";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";
import axios from "axios";
import config from "../../service/config";


const Inscription = () => {

    const [pseudo, setPseudo] = useState(null);
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if(pseudo == null || pseudo == "") {

            const clean = document.querySelector('.error--password');
            clean.style.display = "none";

            const error = document.querySelector('.error--pseudo');
            error.style.display = "inline-block";
            
        } else if(password != check || password == null || password == "" ) {

            const clean = document.querySelector('.error--pseudo');
            clean.style.display = "none";
            
            const error = document.querySelector('.error--password');
            error.style.display = "block";
            
        } else {

            const clean = document.querySelector('.error--pseudo');
            clean.style.display = "none";

            const error = document.querySelector('.error--password');
            error.style.display = "none";

            axios.post(config.url, {
                pseudo,
                password
            })
                .then(() => console.log('succès'))
                .catch(() => console.log('error'));
        }
        

    }

    return(
        <div className="insc">

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