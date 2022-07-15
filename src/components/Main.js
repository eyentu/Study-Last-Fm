import axios from 'axios';
import { API_KEY } from "../config/env";
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Main() {

  const navigate = useNavigate();

  const ArtistDetailPage = (e) => {
    const name = e.currentTarget.getAttribute("data-name")
    const url = e.currentTarget.getAttribute("data-url")
    navigate('/ArtistDetail',{state:{name:name,url:url}});
  };

    const [albumLists, setAlbumList]= useState([])

    useEffect(() => {
        axios
        .get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=2&api_key=${API_KEY}&format=json`)
        .then(res=>res.data.artists.artist)
        .then((data) => setAlbumList(data))
        .catch(error=>console.log({error}));

      }, [])

      const albumData = (
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-8">
              <div className="align-items-center mb-3">
                <h5 className="fw-bold">
                  Top Artist List
                </h5>
              </div>
              <div className="card p-3 d-flex flex-column vh-100 overflow-auto">
              {albumLists.map((user) => (
                    <div key={user.playcount} className="card rounded-3 mb-4">
                     
                      <div onClick={ArtistDetailPage} data-name={user.name} data-url={user.image[2]["#text"]} className="card-body p-4">
                        
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img 
                              className="img-fluid rounded-3"
                              src={user.image[2]["#text"]}
                              alt={user.image[2]["#text"]}
                            />
                          </div>
                          <div className="col-md-5 col-lg-5 col-xl-5 text-start">
                            <p  className="lead fw-normal mb-2">Artist</p>
                            <hr />
                            <p className="lead fw-normal mb-2">
                              <b>{user.name}</b>
                            </p>
                          </div>
                          <div className="col-md-5 col-lg-5 col-xl-4 text-start">
                            <p>
                              <span className="text-muted">listeners: </span>
                              {user.listeners}
                            </p>
                            <p>
                              <span className="text-muted">playcount: </span>
                              <span >{user.playcount}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  ))}
                  </div>
            </div>
          </div>
        </div>
      );

     return (
        <div>
        {albumLists.length > 0 ? (
          albumData
        ) : (
         <div className="p-4">
          <button className="btn" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
          </div>
        )}
      </div>
    );
}

export default Main


