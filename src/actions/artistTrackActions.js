import { API_KEY } from "../config/env";
import axios from "axios";
export const FETCHED__POSTS_TRACKLIST = "FETCHED__POSTS_TRACKLIST"
export const FETCH_POSTS_TRACKLIST_ERROR = "FETCH_POSTS_TRACKLIST_ERROR"

export function fetchArtistTrackLists(name){
    return (dispatch)=>
    {
        axios.get(
            `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&limit=5&api_key=${API_KEY}&format=json`
          )
          .then((res) => res.data.toptracks.track)
        .then(data=>dispatch({
            type: FETCHED__POSTS_TRACKLIST,
            payload:data
        }))
        .catch(err=>dispatch({
            type:FETCH_POSTS_TRACKLIST_ERROR,
            payload:err
        }))
    }
}
