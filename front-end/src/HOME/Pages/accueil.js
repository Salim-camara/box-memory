import React from "react";

// emoji
import mdr from "../../img/mdr.png";
import pleurs from "../../img/pleurs.png";
import smile from "../../img/smile.png";
import bad from "../../img/bad.png";
import heart from "../../img/coeur.png";
import fire from "../../img/fire.png";



const Accueil = () => {

    return(

        <div className="accueil">

            <div className="accueil__top">
            </div>

            <div className="accueil__container"> 

                <h1 className="day">Mercredi</h1>

                <form className="form_accueil">

                    <div className="form_accueil__text">

                        <h2 className="h2--title">Titre</h2>
                        <input className="form_accueil__text--title"></input>

                        <h2 className="h2--desc">Description</h2>
                        <textarea className="form_accueil__text--desc"></textarea>

                    </div>

                    <h2 className="h2--emoji">Emojis</h2>
                    <div className="form_accueil__emoji">

                        <input type="radio" id="smile" className="emoji--inp"></input>
                        <label for="smile">
                            <img src={ smile } className="emoji"/>
                        </label>

                        <input type="radio" id="bad" className="emoji--inp"></input>
                        <label for="bad">
                            <img src={ bad } className="emoji"/>
                        </label>

                        <input type="radio" id="pleurs" className="emoji--inp"></input>
                        <label for="pleurs">
                            <span className="bgc-img">
                                <img src={ pleurs } className="emoji"/>
                            </span>
                        </label>

                        <input type="radio" id="mdr" className="emoji--inp"></input>
                        <label for="mdr">
                            <img src={ mdr } className="emoji"/>
                        </label>

                        <input type="radio" id="heart" className="emoji--inp"></input>
                        <label for="heart">
                            <img src={ heart } className="emoji"/>
                        </label>

                        <input type="radio" id="fire" className="emoji--inp"></input>
                        <label for="fire">
                            <img src={ fire } className="emoji"/>
                        </label>

                    </div>

                    <div className="form_accueil__tag">
                        <h2 className="form_accueil__tag--title h2--tag">Tags</h2>
                        <button className="form_accueil__tag--button">+ Ajouter</button>
                    </div>

                    <div className="button-container">
                        <button className="form_accueil--button">Enregistrer</button>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default Accueil;