import React from "react";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";


const Inscription = () => {

    return(
        <div className="insc">

            <Navigation />
            <Logo />

            <form className="insc__form">

                <div className="insc__form__pseudo">
                    <p className="p--insc">Entrez votre pseudo</p>
                    <input type="text" className="inp--insc" placeholder="Ex: Chrispy62, Snow_white_my_queen, Poulette..." />
                </div>

                <div className="insc__form__password">
                    <p className="p--insc">Mot de passe</p>
                    <input type="password" className="inp--insc" />
                </div>

                <div className="insc__form__check">
                    <p className="p--insc">Confirmez mot de passe</p>
                    <input type="password" className="inp--insc" />
                </div>

                <div className="buttoncontainer">
                    <button className="buttoncontainer--button">C'est parti !</button>
                </div>    

            </form>






        </div>
    )
}

export default Inscription;