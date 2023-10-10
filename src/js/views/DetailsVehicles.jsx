import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useContext } from 'react'
import { Context } from '../store/appContext'
const DetailsVehicles = () => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const [vehDetail, setVehDetail] = useState({})
    useEffect(() => {
        actions.getVehicle(id)
        setVehDetail(store.vehicledetail)
    }, [store.vehicledetail])
    return (
        <>
            <div className="container d-flex justify-content-center mt-2">
                <div className="card mb-3" style={{ maxWidth: '1400px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehDetail?.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="mb-3">
                                <h5 className="card-title">{vehDetail?.properties?.name}</h5>
                                <p className="card-text">{vehDetail?.description}</p>
                                </div>
                                <div className="detail-divider mt-3 d-flex text-danger">
                                    <div className="row my-2 mx-2">
                                        <p className="m-1 p-1 fw-bold">Name</p>
                                        <p className="m-1 p-1">{vehDetail?.properties?.name}</p>
                                    </div>
                                    <div className="row my-2 mx-2">
                                        <p className="m-1 p-1 fw-bold">Model</p>
                                        <p className="m-1 p-1">{vehDetail?.properties?.model}</p>
                                    </div>
                                    <div className="row my-2 mx-2">
                                        <p className="m-1 p-1 fw-bold">Vehicle Class</p>
                                        <p className="m-1 p-1">{vehDetail?.properties?.vehicle_class}</p>
                                    </div>
                                    <div className="row my-2 mx-2">
                                        <p className="m-1 p-1 fw-bold mx-2">manufacturer</p>
                                        <p className="m-1 p-1">{vehDetail?.properties?.manufacturer}</p>
                                    </div>
                                    <div className="row my-2 mx-2 mx-2">
                                        <p className="m-1 p-1 fw-bold">Cost in Credits</p>
                                        <p className="m-1 p-1">{vehDetail?.properties?.cost_in_credits}</p>
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

export default DetailsVehicles
