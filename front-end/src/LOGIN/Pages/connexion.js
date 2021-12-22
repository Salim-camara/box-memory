import React, { useEffect, useState } from "react";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";
import axios from "axios";
import config from "../../service/config";
import { useHistory } from "react-router";
import ErrorOrientation from "../../HOME/Components/errorOrientation";



const Connexion = () => {

    const [pseudo, setPseudo] = useState(null);
    const [password, setPassword] = useState("");
    const error = document.querySelector('.error');
    
    const historique = useHistory();

    useEffect(() => {
        localStorage.clear();

        // controle width
        if(window.innerWidth > 600) {
            historique.push('/width');
        }
    },[])

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(`${config.url}/connexion`, {
            pseudo,
            password
        })
            .then((data) => {
                localStorage.setItem('token', data.data.token);
                historique.push('/accueil');
            })
            .catch((err) => {

                const errorMsg = err.response.data.message;
                error.innerHTML = `${errorMsg}`;
                error.style.display = "block";

            });
    }



    return(

        <div className="conn">

            <ErrorOrientation />
            <Navigation />
            <Logo />

            <form className="conn__form" onSubmit={ handleSubmit }>

                <div className="conn__form__pseudo">
                    <p className="p--conn">Pseudo</p>
                    <input 
                    type="text" 
                    className="inp--conn" 
                    value={ pseudo }
                    onChange={ (e) => setPseudo(e.target.value) }
                    />
                </div>

                <div className="conn__form__password">
                    <p className="p--conn">Mot de passe</p>
                    <input 
                    type="password" 
                    className="inp--conn" 
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>

                <p className="error"></p>

                <div className="buttoncontainer">
                    <button className="buttoncontainer--button">C'est parti !</button>
                </div> 
            </form>
        </div>
    )
}

export default Connexion;