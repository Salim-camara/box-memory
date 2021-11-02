import React from "react";
import Logo from "../Components/logo";
import Navigation from "../Components/nav";


const Inscription = () => {

    return(
        <div className="insc">

            {/* <Navigation /> */}
            <Logo />

            <form className="insc__form">

                <div className="insc__form__pseudo">
                    <p>Entrez votre pseudo</p>
                    <input type="text" placeholder="Ex: Chrispy62, Snow_white_my_queen, Poulette..." />
                </div>

                <div className="insc__form__password">
                    <p>Mot de passe</p>
                    <input type="password" />
                </div>

                <div className="insc__form__check">
                    <p>Confirmez mot de passe</p>
                    <input type="password" />
                </div>

                <button>C'est parti !</button>

            </form>






        </div>
    )
}

export default Inscription;