import React, { useEffect, useState } from "react";
import Sidebar from "../Components/sidebar";

// emojis
import mdr from "../../img/mdr.png";
import pleurs from "../../img/pleurs.png";
import smile from "../../img/smile.png";
import bad from "../../img/bad.png";
import heart from "../../img/coeur.png";
import fire from "../../img/fire.png";
import Tags from "../Components/tags";



const Accueil = () => {

    // clear du storage pour les tags
    useEffect(() => {
        localStorage.clear();
    }, []);

    // Sidebar
    const handleSide = () => {
        const sidebar = document.querySelector('.sidebar_accueil');
        const content = document.querySelector('.accueil__container');
        const burger = document.querySelector('.burger-icon');

        sidebar.classList.toggle('activebar');
        burger.classList.toggle('burger-active');
        content.classList.toggle('content--active');
    }

    const handleContent = () => {
        const sidebar = document.querySelector('.sidebar_accueil');
        const content = document.querySelector('.accueil__container');
        const burger = document.querySelector('.burger-icon');

        sidebar.classList.remove('activebar');
        burger.classList.remove('burger-active');
        content.classList.remove('content--active');
    }



    // Tags
    const [tag1, setTag1] = useState(null);
    const [tag2, setTag2] = useState(null);

    const handleTags = (e) => {

        e.preventDefault();

        const addButton = document.querySelector('.form_accueil__tag--button');
        const tagContainer = document.querySelector('.tagcontainer');
        const content = document.querySelector('.accueil__container');

        content.classList.add('contentblur');
        tagContainer.style.display = "block";

    } 

    const handleTagsDelete = (e) => {

        e.preventDefault();

        const container = document.querySelector('.container-bubles');
        const addButton = document.querySelector('.form_accueil__tag--button');

        container.innerHTML = "";
        addButton.style.display = "block";
        localStorage.clear();

    }

    // Emojis
    const [emoji, setEmoji] = useState(null);

    const handleEmojiDelete = () => {
        const radioButtons = document.querySelectorAll(`input[type="radio"]`);
        
        radioButtons.forEach((element) => {
            element.checked = false;
            setEmoji(null);
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(emoji);
        
    }


    return(

        <div className="accueil">

            <div className="sidebar_accueil">
                <Sidebar />
            </div>

            <Tags />


            {/* bloc INPUTS */}
            <div className="accueil__top">
                <div className="accueil__top--text">
                    Hello Poulette
                </div>
                <div className="accueil__top--side" onClick={ handleSide }> <i class="fas fa-bars burger-icon"></i> </div>
            </div>

            <div className="accueil__container" onClick={ handleContent }> 

                <h1 className="day">Mercredi</h1>

                <form className="form_accueil" onSubmit={ handleSubmit }>

                    <div className="form_accueil__text">

                        <h2 className="h2--title">Titre</h2>
                        <input className="form_accueil__text--title"></input>

                        <h2 className="h2--desc">Description</h2>
                        <textarea className="form_accueil__text--desc"></textarea>

                    </div>

                    
                    {/* Bloc EMOJI */}
                    <div className="emoji--title">
                        <h2 className="h2--emoji">Emojis</h2>
                        <button className="emoji--button" onClick={ handleEmojiDelete }> <i class="fas fa-times-circle"></i></button>
                    </div>
                    <div className="form_accueil__emoji">

                        <input type="radio" value="smile" id="smile" className="emoji--inp" name="emoji" onChange={ (e) => setEmoji( e.target.value) }></input>
                        <label for="smile">
                            <img src={ smile } className="emoji"/>
                        </label>

                        <input type="radio" value="bad" id="bad" className="emoji--inp" name="emoji" onChange={ (e) => setEmoji( e.target.value) }></input>
                        <label for="bad">
                            <img src={ bad } className="emoji"/>
                        </label>

                        <input type="radio" value="pleurs" id="pleurs" className="emoji--inp" name="emoji" onChange={ (e) => setEmoji( e.target.value) }></input>
                        <label for="pleurs">
                            <span className="bgc-img">
                                <img src={ pleurs } className="emoji"/>
                            </span>
                        </label>

                        <input type="radio" value="mdr" id="mdr" className="emoji--inp" name="emoji" onChange={ (e) => setEmoji( e.target.value) }></input>
                        <label for="mdr">
                            <img src={ mdr } className="emoji"/>
                        </label>

                        <input type="radio" value="heart" id="heart" className="emoji--inp" name="emoji" onChange={ (e) => setEmoji( e.target.value) }></input>
                        <label for="heart">
                            <img src={ heart } className="emoji"/>
                        </label>

                        <input type="radio" value="fire" id="fire" className="emoji--inp" name="emoji" onChange={ (e) => setEmoji( e.target.value) }></input>
                        <label for="fire">
                            <img src={ fire } className="emoji"/>
                        </label>

                    </div>


                    {/* bloc TAGS */}
                    <div className="form_accueil__tag">
                        <h2 className="form_accueil__tag--title h2--tag">Tags</h2>
                        <button className="form_accueil__tag--button" onClick={ handleTags }> <i class="fas fa-plus-circle"></i> </button>
                        <button className="form_accueil__tag--button--delete" onClick={ handleTagsDelete }> <i class="fas fa-times-circle"></i></button>
                    </div>

                    <div className="container-bubles"></div>


                    <div className="button-container">
                        <button className="form_accueil--button">Enregistrer</button>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default Accueil;