import React from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
const  CardVehicles = () => {
    const {store, actions} = useContext(Context)
  return (
    <div className='d-flex'>
    {store.vehicles.map((ve) => {
        return(
            <div key={ve.uid} className="card m-4" style={{ width: '18rem' }}>
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${ve.uid}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{ve.properties.name}</h5>
                            <div className="card-text ">
                                <p className='m-0 p-0'>Model: {ve.properties.model}</p>
                                <p className='m-0 p-0'>Vehicle Class: {ve.properties.vehicle_class}</p>
                            </div>
                            <div className='d-flex justify-content-between my-1'>
                            <Link to={`/vehicles/${ve.uid}`} className="btn btn-primary">Learn More!</Link>
                            <button onClick={() => actions.addToFav(ve)} className='btn btn-warning'><i className="fa-solid fa-star"></i></button>
                            </div>
                        </div>
                    </div>
        )
    })}
    </div>
  )
}

export default CardVehicles
