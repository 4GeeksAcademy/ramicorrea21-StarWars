import React from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

const CardPeople = () => {
    const { store } = useContext(Context)
    return (
        <div className='d-flex'>
            {store.people.map((p) => {
                return (
                    <div key={p.uid} className="card m-4" style={{ width: '18rem' }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${p.uid}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{p.properties.name}</h5>
                            <div className="card-text ">
                                <p className='m-0 p-0'>Gender: {p.properties.gender}</p>
                                <p className='m-0 p-0'>Hair Color: {p.properties.hair_color}</p>
                                <p className='m-0 p-0'>Eye-Color: {p.properties.eye_color}</p>
                            </div>
                            <div className='d-flex justify-content-space-between'>
                            <Link to={`/details/${p.uid}`} className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardPeople
