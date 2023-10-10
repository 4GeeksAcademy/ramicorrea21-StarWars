import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () =>{
    const {store, actions} = useContext(Context)

    return(
        <>
        <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                            <span> {store.favorites.length}</span>
                            
                        </button>
                        <ul className="dropdown-menu">
                            {store.favorites.map((fav) =>{
                                return(
                                    <li key={fav.uid} className="d-flex justify-content-between">
                                        <Link className="dropdown-item" to={`/${fav.nature}/${fav.uid}`}>{fav?.properties?.name}</Link>
                                        <button className="btn" onClick={() => actions.deleteFav(fav._id) }>
                                        <i className="fa-solid fa-trash"></i>
                                        </button>
                                        </li>
                                )
                            })}
                            

                        </ul>
                    </div>

        </>
    )
}

export default Favorites