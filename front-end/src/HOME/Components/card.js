import React from "react";
import heart from "../../img/coeur.png";


const Card = ({ data }) => {

    return(
        <div className="card">

            <p className="card__date">Lundi 30 novembre 2021</p>
            <div className="card__title">
                <h2 className="h2__card">Anniv de maman</h2>
            </div>

            <div className="card__desc">
            Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor
            </div>
            <div className="card__tags">
                <img src={heart} style={{width: '30px', height: '30px'}} />
                <p className="card_tag"># hello</p>
                <p className="card_tag"># saucisse</p>
            </div>
        </div>
        
    )
}

export default Card;