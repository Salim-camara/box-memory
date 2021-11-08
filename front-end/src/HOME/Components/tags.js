import React, { useState } from "react";


const Tags = () => {

    const [tags, setTag] = useState("");

    const handleCross = () => {

        const tagContainer = document.querySelector('.tagcontainer');
        const content = document.querySelector('.accueil__container');
        const input = document.querySelector('.tagtyping--input');

        tagContainer.style.display = "none";
        content.classList.remove('contentblur');
        input.classList.remove("tagtyping--input__error");
    }

    const handleCheck = () => {
        
        const input = document.querySelector('.tagtyping--input');

        console.log(tags);

        if (tags == "") {
            input.classList.add("tagtyping--input__error");

        } else {
            const tagContainer = document.querySelector('.tagcontainer');
            const content = document.querySelector('.accueil__container');
            const testLs = localStorage.getItem('tag1');

            tagContainer.style.display = "none";
            content.classList.remove('contentblur');
            input.classList.remove("tagtyping--input__error");


            if(testLs) {
                localStorage.setItem('tag2', tags);
            } else {
                localStorage.setItem('tag1', tags);
            }
        }

    }

    return (

        <div className="tagcontainer">

            <div className="tagtyping">
                <i class="fas fa-hashtag"></i>
                <input type="text" className="tagtyping--input" value={tags} onChange={(e) => setTag(e.target.value)}></input>
                <div className="tagtyping__buttons">
                    <i class="fas fa-times" onClick={handleCross}></i>
                    <i class="fas fa-check" onClick={handleCheck}></i>
                </div>
            </div>

        </div>
    )
}

export default Tags;