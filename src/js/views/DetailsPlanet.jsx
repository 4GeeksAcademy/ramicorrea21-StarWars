import React ,{ useState , useEffect} from 'react'
import { Context } from '../store/appContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'


const  DetailsPlanet = () => {
  let {id} = useParams()
    const {store, actions} = useContext(Context)
    const [detPlanet, setDetPlanet] = useState({})
    useEffect(() =>{
        actions.getPlanet(id)
        setDetPlanet(store.planetdetail)
    }, [store.planetdetail])
  return (
          <>
            <div className="container d-flex justify-content-center mt-2">
                <div className="card mb-3" style={{ maxWidth: '1000px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${detPlanet?.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="mb-3">
                                <h5 className="card-title">{detPlanet?.properties?.name}</h5>
                                <p className="card-text">{detPlanet?.description}</p>
                                </div>
                                <div className="detail-divider mt-3 d-flex text-danger">
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Name</p>
                                        <p className="m-1 p-1">{detPlanet?.properties?.name}</p>
                                    </div>
                                    * <div className="row my-2 ">
                                        <p className="m-1 p-1 fw-bold">Climate</p>
                                        <p className="m-1 p-1">{detPlanet?.properties?.climate}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Population</p>
                                        <p className="m-1 p-1">{detPlanet?.properties?.population}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Orbital - Period</p>
                                        <p className="m-1 p-1">{detPlanet?.properties?.orbital_period}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Rotation-Period</p>
                                        <p className="m-1 p-1">{detPlanet?.properties?.rotation_period}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Eye Color</p>
                                        <p className="m-1 p-1">{detPlanet?.properties?.diameter}</p>
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

export default DetailsPlanet
