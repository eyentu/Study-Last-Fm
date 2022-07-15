import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtistAlbumLists } from "../actions/artistAlbumActions";

export class ArtistDetail extends Component {  
  componentDidMount(){
      this.props.fetchArtistAlbumLists(this.props.dataName);
    }

  render() {  
    const albumData = (
        <div>
          <div className="align-items-center mb-3">
          <p className="fw-normal text-start pt-3">Top Albums</p>
          <hr/>
          </div>
          <div>
            {this.props.artistAlbumReducer.posts.map((user) => (
              <div key={user.playcount} className="card rounded-3 mb-4">
                <div className="card-body p-4" >
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        className="img-fluid rounded-3" style= {{"cursor":"pointer"}} 
                        onClick={()=> window.open(user["url"], "_blank")} 
                        src={user.image[2]["#text"]}
                        alt={user.image[2]["#text"]}
                      />
                    </div>
                    <div className="col-md-5 col-lg-5 col-xl-5 text-start">
                      <p className="fw-normal mb-2"><b>{user.name}</b></p>
                      <p className="fw-normal mb-2">
                        {user.artist["name"]}
                      </p>
                    </div>
                    <div className="col-md-5 col-lg-5 col-xl-4 text-start">
                      <p>
                        <span>{user.playcount}</span>
                        <span className="text-muted"> play</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    return (
        <div>
  {this.props.artistAlbumReducer.fetched === true ? (
                albumData
              ) : (
                <div className="p-4">
                  <button className="btn" type="button" disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                </div>
              )}
          </div>
    );
  }
}

const mapStateToProps = ({ artistAlbumReducer }) => ({
  artistAlbumReducer,
});


const mapDispatchToProps = {// Store a veri gondermek icinde bunu kullanacagiz
  fetchArtistAlbumLists,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
