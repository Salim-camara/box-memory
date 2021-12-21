import React, { useEffect, useState } from "react";
import Sidebar from "../Components/sidebar";
import axios from "axios";
import config from "../../service/config";
import Tags from "../Components/tags";
import axiosHeaders from "../../service/axiosHeaders";

// emojis
import mdr from "../../img/mdr.png";
import pleurs from "../../img/pleurs.png";
import smile from "../../img/smile.png";
import bad from "../../img/bad.png";
import heart from "../../img/coeur.png"; 
import fire from "../../img/fire.png";
import MemorieExist from "../Components/memorieExist";
import { useHistory } from "react-router";



const Accueil = () => {

    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [day, setDay] = useState(null);
    const [pseudo, setPseudo] = useState(null);
    const [checkMemorie, setCheckMemorie] = useState(false);

    const historique = useHistory();
    const token = localStorage.getItem('token');
    
    useEffect(() => {

        // controle width
        if(window.innerWidth > 1600) {
            historique.push('/width');
        }

        // test de l'existance du souvenir
        axios.get(`${config.url}/extras_check`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if(res.data.data !== null) {
                    setCheckMemorie(true);
                    console.log(token);
                }
            })
            .catch((err) => historique.push('/error'));
        
        // clear du storage pour les tags
        localStorage.removeItem('tag1');
        localStorage.removeItem('tag2');

        // jour dynamique
        axios.get(`${config.url}/extras_accueil`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => { 
                console.log(token)
                setDay(res.data.data.jour);
                setPseudo(res.data.data.pseudo);
            })
            .catch((err) => historique.push('/error'));

    }, []);

    window.screen.orientation.lock("portrait-primary");


    // test de l'existance du souvenir
    if(checkMemorie == true) {
        const blur = document.querySelector('.accueil__container');
        const msgCheck = document.querySelector('.memorie');

        msgCheck.style.display = "block";
        blur.classList.add('blurMsgCheck');
    }


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
    const handleTags = (e) => {

        e.preventDefault();

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
        localStorage.removeItem('tag1');
        localStorage.removeItem('tag2');


    }


    // Emojis
    const [emoji, setEmoji] = useState(null);

    const handleEmojiDelete = (e) => {
        
        e.preventDefault();
        const radioButtons = document.querySelectorAll(`input[type="radio"]`);
        
        radioButtons.forEach((element) => {
            element.checked = false;
            setEmoji(null);
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const getStorage = async () => {
            
            const tag1 = localStorage.getItem('tag1');
            const tag2 = localStorage.getItem('tag2');
            const objectTag = {
                tag1,
                tag2
            }
            return objectTag;
        }

        if(title == null || title == "") {

            const errorTitle = document.querySelector('.error--title');
            errorTitle.style.display = "block";

        } else {

            getStorage().then((tags) => {

                console.log(tags);
                
                axios.post(`${config.url}/memories`, {
                    title,
                    desc,
                    emoji,
                    tags

                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(() => {
                        window.location.reload();
                    })
                    .catch((err) => console.log('erreur axios' + err));
            });

        }
    }


    return(

        
        <div className="accueil">


            <MemorieExist />



            <div className="sidebar_accueil">
                <Sidebar />
            </div>

            <Tags />


            {/* bloc INPUTS */}
            <div className="accueil__top">
                <div className="accueil__top--text">
                   (en dev.) - Hello {pseudo}
                </div>
                <div className="accueil__top--side" onClick={ handleSide }> <i class="fas fa-bars burger-icon"></i> </div>
            </div>

            <div className="accueil__container" onClick={ handleContent }> 

                <h1 className="day">{day}</h1>

                <form className="form_accueil" onSubmit={ handleSubmit }>

                    <div className="form_accueil__text">

                        <h2 className="h2--title">Titre</h2>
                        <input className="form_accueil__text--title" value={ title } onChange={ (e) => setTitle( e.target.value )}></input>

                        <h2 className="h2--desc">Description</h2>
                        <textarea className="form_accueil__text--desc" value={ desc } onChange={ (e) => setDesc( e.target.value )}></textarea>

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

                    <p className="error--title">Vous devez obligatoirement avoir un titre.</p>


                    <div className="button-container">
                        <button className="form_accueil--button">Enregistrer</button>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default Accueil;