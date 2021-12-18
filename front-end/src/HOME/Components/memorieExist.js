import React from "react";

import fire from "../../img/fire.png";


const MemorieExist = () => {

    return(
        <div className="memorie">
            <div className="memorie--emoji"> <img src={fire} style={{width: '100px', height: '100px'}} /> </div>
            <h1>Vous avez déjà un souvenir d'enregistré pour aujourd'hui</h1>
            <p>Il est impossible de créer plusieurs souvenirs la même journée.<br />Ces derniers sont uniques et intemporelles, vous pouvez uniquement les consulter en <strong>cliquant ici</strong> </p>

        </div>
    )
}

export default MemorieExist;