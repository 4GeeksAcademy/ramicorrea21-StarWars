import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/index.css'

const Details = () => {
    const { id } = useParams()
    const { store, actions } = useContext(Context)
    const [detailPerson, setDetailPerson] = useState({})
    useEffect(() => {
        actions.getCharacter(id)
        setDetailPerson(store.character)
    }, [store.character])


    return (
        <>
            <div className="container d-flex justify-content-center mt-2">
                <div className="card mb-3" style={{ maxWidth: '1000px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${detailPerson?.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="mb-3">
                                <h5 className="card-title">{detailPerson?.properties?.name}</h5>
                                <p className="card-text">{detailPerson?.description}</p>
                                </div>
                                <div className="detail-divider mt-3 d-flex text-danger">
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Name</p>
                                        <p className="m-1 p-1">{detailPerson?.properties?.name}</p>
                                    </div>
                                    <div className="row my-2 ">
                                        <p className="m-1 p-1 fw-bold">Birth Year</p>
                                        <p className="m-1 p-1">{detailPerson?.properties?.birth_year}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Gender</p>
                                        <p className="m-1 p-1">{detailPerson?.properties?.gender}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Height</p>
                                        <p className="m-1 p-1">{detailPerson?.properties?.height}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Skin Color</p>
                                        <p className="m-1 p-1">{detailPerson?.properties?.skin_color}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Eye Color</p>
                                        <p className="m-1 p-1">{detailPerson?.properties?.eye_color}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details