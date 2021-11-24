import React from "react";
import heart from "../../img/coeur.png";


const Card = ({ data }) => {

    return(
        <div className="card">
            <div className="card__title">Anniv de maman</div>
            <div className="card__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </div>
            <div className="card__tags">
                <img src={heart} style={{width: '30px', height: '30px'}} />
                {data}
            </div>
        </div>
    )
}

export default Card;