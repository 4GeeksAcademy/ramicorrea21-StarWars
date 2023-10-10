import React from "react";
import CardPeople from './CardPeople.jsx'
import '../../styles/index.css'
import CardPlanets from "./CardPlanets.jsx";
const Carrousel = () => {
    return (
        <>
            <h1>Characters</h1>
            <div className="container d-flex carrousel my-4">
                <CardPeople/>
            </div>
            <h1>Planets</h1>
            <div className="container d-flex carrousel">
                <CardPlanets/>
            </div>
        </>
    )
}

export default Carrousel