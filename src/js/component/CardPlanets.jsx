import React from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
const  CardPlanets = () => {
    const {store, actions} = useContext(Context)
  return (
    <div>
      <div className='d-flex'>
            {store.planets.map((p) => {
                return (
                    <div key={p.uid} className="card m-4" style={{ width: '18rem' }}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${p.uid}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{p.properties.name}</h5>
                            <div className="card-text ">
                                <p className='m-0 p-0'>Population: {p.properties.population}</p>
                                <p className='m-0 p-0'>Terrain: {p.properties.terrain}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <Link to={`/planets/${p.uid}`} className="btn btn-primary">Learn More!</Link>
                            <button onClick={() => actions.addToFav(p)} className='btn btn-warning'><i className="fa-solid fa-star"></i></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CardPlanets
