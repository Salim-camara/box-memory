import React, { useEffect, useState } from "react";

// emojis
import mdr from "../../img/mdr.png";
import pleurs from "../../img/pleurs.png";
import smile from "../../img/smile.png";
import bad from "../../img/bad.png";
import heart from "../../img/coeur.png";
import fire from "../../img/fire.png";

const Card = ({ info }) => {

    useEffect(() => {

        console.log(info);
    }, []);

    const day = info.date.day;
    const dayNum = info.date.dayNum;
    const month = info.date.month;
    const year = info.date.year;
    const title = info.title;
    const desc = info.desc;
    const emoji = info.emoji;
    const tag1 = info.tags[0];
    const tag2 = info.tags[1];
    
    const handleEmoji = () => {

        switch (emoji) {

            case 'mdr': return(mdr);
            break;
            case 'pleurs': return(pleurs);
            break;
            case 'smile': return(smile);
            break;
            case 'bad': return(bad);
            break;
            case 'heart': return(heart);
            break;
            case 'fire': return(fire);
            break;
            default: return(null);
        }
    }

    return(
        <div className="card">

            <p className="card__date">{day} {dayNum} {month} {year}</p>
            <div className="card__title">
                <h2 className="h2__card">{title}</h2>
            </div>

            <div className="card__desc">
                {desc ? (`${desc}`) : ('Aucune description')}
            </div>

            <div className="card__tags">
                {emoji != null && (
                    <img src={handleEmoji()} style={{width: '30px', height: '30px'}} />
                )}
                {(tag1 !== null) && (
                    <p className="card_tag">#{tag1}</p>
                )}
                {(tag2 !== null) && (
                    <p className="card_tag">#{tag2}</p>
                )}
            </div>
        </div>
        
    )
}

export default Card;