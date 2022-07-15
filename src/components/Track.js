import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtistTrackLists } from "../actions/artistTrackActions";

export class ArtistDetail extends Component {
    componentDidMount(){
            this.props.fetchArtistTrackLists(this.props.dataName);
        }
  render() {  
    const albumData = (
        <div>
          <div className="align-items-center mb-3">
          <p className="fw-normal text-start pt-3">Top Tracks</p>
          <hr/>
          </div>
          <div>
            {this.props.artistTrackReducer.posts.map((user) => (
              <div key={user.playcount} className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        className="img-fluid rounded-3"
                        src={user.image[2]["#text"]}
                        alt={user.image[2]["#text"]}
                      />
                    </div>
                    <div className="col-md-5 col-lg-5 col-xl-5 text-start">
                      <p className="fw-normal mb-2"><b>Graduation</b></p>
                      <p className="fw-normal mb-2">
                        {user.name}
                      </p>
                    </div>
                    <div className="col-md-5 col-lg-5 col-xl-5 text-start">
                      <p>
                        <span className="text-muted">listeners: </span>
                        {user.listeners}
                      </p>
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
  {this.props.artistTrackReducer.fetched === true ? (
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

const mapStateToProps = ({ artistTrackReducer }) => ({
  artistTrackReducer,
});


const mapDispatchToProps = {// Store a veri gondermek icinde bunu kullanacagiz
  fetchArtistTrackLists,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
