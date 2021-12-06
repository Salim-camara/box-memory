import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../Components/nav";
import config from "../../service/config";



const WeekList = () => {

    useEffect(() => {

        axios.get(`${config.url}/memories`)
            .then((memories) => {

                const data = memories.data.data;

                for(const semaine of data) {

                    const weekExist = document.getElementById(`${semaine.week}`);
                    const weeksContainer = document.querySelector('.weeks');

                    if (weekExist == undefined) {

                        const week = document.createElement('div');
                        week.id = semaine.week;
                        week.classList.add('weeksOfWeekList');
                        week.innerHTML = `
                            <span>
                                Semaine ${semaine.week} - ${semaine.date.year}
                            </span>
                            <span>
                                <i class="fas fa-arrow-right"></i>
                            </span>`;
                        console.log(week);

                        weeksContainer.appendChild(week);
                    }
                }
            })
            .catch((err) => console.log('erreur récupération souvenirs ' + err));

    }, []);

    return(
        <div className="weeklist">

            <Navigation />

            <div className="filter">
            </div>

            <div className="weeks">
            </div>


        </div>
    )
}

export default WeekList;