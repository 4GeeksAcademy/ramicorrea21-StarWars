import React from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'


const CardPeople = () => {
    const { store } = useContext(Context)
    return (
        <div className='row'>
            {store.people.map((p) => {
                return (
                    <div key={p.uid} className="card m-4" style={{ width: '18rem' }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{p.properties.name}</h5>
                            <p className="card-text ">
                                <p className='m-0 p-0'>Gender: {p.properties.gender}</p>
                                <p className='m-0 p-0'>Hair Color: {p.properties.hair_color}</p>
                                <p className='m-0 p-0'>Eye-Color: {p.properties.eye_color}</p>
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardPeople
