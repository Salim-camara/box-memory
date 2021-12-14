import React from "react";


const Navigation = ({ donnee }) => {

    const handleSide = () => {
        const sidebar = document.querySelector('.sidebar_accueil');
        const content = document.querySelector('.toggleSidebar');
        const burger = document.querySelector('.burger-icon');
        
        sidebar.classList.toggle('activebar');
        burger.classList.toggle('burger-active');
        content.classList.toggle('content--active');
    } 

    return(

        <div className="nav">

            <div className="nav__back">
                <i class="fas fa-arrow-left"></i>
            </div>

            <div className="nav__content">
                salut je suis
            </div>

            <div className="nav__burger" onClick={ handleSide }>
                <i class="fas fa-bars burger-icon"></i>
            </div>

        </div>
    )
}

export default Navigation;