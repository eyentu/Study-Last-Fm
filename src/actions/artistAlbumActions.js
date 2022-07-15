import { API_KEY } from "../config/env";
import axios from "axios";
export const FETCHED__POSTS_ALBUMLIST = "FETCHED__POSTS_ALBUMLIST"
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"

export function fetchArtistAlbumLists(name){
    return (dispatch)=>
    {
        axios.get(
            `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&limit=5&api_key=${API_KEY}&format=json`
          )
          .then((res) => res.data.topalbums.album)
        .then(data=>dispatch({
            type: FETCHED__POSTS_ALBUMLIST,
            payload:data
        }))
        .catch(err=>dispatch({
            type:FETCH_POSTS_ERROR,
            payload:err
        }))
    }
}
