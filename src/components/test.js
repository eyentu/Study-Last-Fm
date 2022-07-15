import React, { Component } from "react";
import Album from "./Album";
import Track from "./Track";

export class ArtistDetail extends Component {
constructor(props) {
  super(props)
  
  this.state = {
    artist:'',
    artistImg:''
    }
}

  componentDidMount() {
    const url = window.location.search   
    const arrayResult = url.split("?")
    
    //Artist name info
    const data_name = arrayResult[1].slice(5).replace(/%20/g, ' ');
    this.setState({artist: data_name});

    //Artist name img
    const artistImg =  arrayResult[2].slice(4)
    this.setState({artistImg: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png'});
  }

  render() {  
    return (
        <div>
        
        <div className="container h-100 py-5">
          <div className="row border rounded">
            <div className='p-3 d-flex flex-column'>
            <div className="card rounded-3 mb-4 ">
                <div className="card-body p-4" style={{height: "20vh"}}>
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        className="img-fluid rounded-3" src={this.state.artistImg} />
                    </div>
                    <div className="col-md-10 col-lg-10 col-xl-10 text-start">
                      <p>
                        <span><b>{this.state.artist}</b></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <Album/>
            </div>
            <div className="col-6">
              <Track/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state,props) => {
// Eger ustten gelen state ler ile propslari ayirmak istiyorsan bunu kullan
//   console.log('mapStateToProps-State', state, 'mapStateToProps-Props', props)
//   return state;
// }

export default ArtistDetail
