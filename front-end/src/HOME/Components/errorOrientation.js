import React, { useEffect } from "react";



const ErrorOrientation = () => {

    useEffect(() => {
        if ( (window.screen.orientation.type != "portrait") && (window.screen.orientation.type != "portrait-primary") ) {
            const rotate = document.querySelector('.orientation');
            rotate.style.display = "block";
        }
    }, [])

    // test orientation
    window.screen.orientation.addEventListener('change', () => {
        
        if( (window.screen.orientation.type != "portrait") && (window.screen.orientation.type != "portrait-primary") ) {
            const rotate = document.querySelector('.orientation');
            rotate.style.display = "block";
        } else {
            const rotate = document.querySelector('.orientation');
            rotate.style.display = "none";
        }
    })

    return(
        <div className="orientation">
            <h1 className="orientation_title">Veuillez remettre votre téléphone en mode portrait</h1>
            <div className="orientation_container">
                <i class="fas fa-mobile-alt orientation_phone"></i>
                <i class="fas fa-arrow-right orientation_arrow"></i>
                <i class="fas fa-mobile-alt orientation_phoneright"></i>
            </div>
        </div>
    )
}

export default ErrorOrientation;