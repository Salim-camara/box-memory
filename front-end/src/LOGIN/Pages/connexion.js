import React from "react";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";



const Connexion = () => {

    return(

        <div className="conn">
            <Navigation />
            <Logo />

            <form className="conn__form">

                <div className="conn__form__pseudo">
                    <p className="p--conn">Pseudo</p>
                    <input type="password" className="inp--conn" />
                </div>

                <div className="conn__form__password">
                    <p className="p--conn">Mot de passe</p>
                    <input type="password" className="inp--conn" />
                </div>

                <div className="buttoncontainer">
                    <button className="buttoncontainer--button">C'est parti !</button>
                </div> 
            </form>
        </div>
    )
}

export default Connexion;