import React from "react";
import { useHistory } from "react-router";

import fire from "../../img/fire.png";


const MemorieExist = () => {

    const historique = useHistory();

    return(
        <div className="memorie">
            <div className="memorie--emoji"> <img src={fire} style={{width: '100px', height: '100px'}} /> </div>
            <h1 className="memorie--title">Vous avez déjà un souvenir d'enregistré pour aujourd'hui</h1>
            <p className="memorie--text">Il est impossible de créer plusieurs souvenirs la même journée.<br />Ces derniers sont uniques et intemporels, vous pouvez uniquement les consulter en <strong style={{color: '#61DAFBFF'}} onClick={() => historique.push('/weeks')}>cliquant ici</strong>.</p>

        </div>
    )
}

export default MemorieExist;