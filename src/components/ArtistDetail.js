import React, { Component, useState } from "react";
import {useLocation} from 'react-router-dom';
import Album from "./Album";
import Track from "./Track";

function ArtistDetail() {
  const location = useLocation();
  return (
    <div>
        
    <div className="container h-100 py-5">
      <div className="row border rounded">
        <div className='p-3 d-flex flex-column'>
        <div className="card rounded-3 mb-4 ">
            <div className="card-body p-4" >
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    className="img-fluid rounded-3" src={location.state.url}/>
                </div>
                <div className="col-md-10 col-lg-10 col-xl-10 text-start">
                  <p className="text-center text-sm-center text-lg-start">
                    <span><b>{location.state.name}</b></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Album dataName = {location.state.name}/>
        </div>
        <div className="col-6">
          <Track dataName = {location.state.name}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ArtistDetail
