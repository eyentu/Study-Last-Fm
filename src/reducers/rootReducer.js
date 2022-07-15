import artistAlbumReducer from "./artistAlbumReducer";
import artistTrackReducer from "./artistTrackReducer";
import { combineReducers } from "redux";

 
export default function rootReducer (){ return combineReducers(
    {artistAlbumReducer,artistTrackReducer})
}
 