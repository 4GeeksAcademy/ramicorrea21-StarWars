import React from "react";
import CardPeople from './CardPeople.jsx'
import '../../styles/index.css'
const Carrousel = () => {
    return (
        <>
            <h1>Characters</h1>
            <div className="container d-flex carrousel">
                <CardPeople/>
            </div>
        </>
    )
}

export default Carrousel