import {FETCHED__POSTS_TRACKLIST, FETCH_POSTS_TRACKLIST_ERROR} from "../actions/artistTrackActions"

const initialState = {
  fetching:false,
  fetched:false,
  posts:[],
  error:null
}

export default function artistTrackReducer(state=initialState, {type,payload}) {
  switch (type) {
    case FETCHED__POSTS_TRACKLIST:
        return{...state,fetching:false,fetched:true,posts:payload};
        case FETCH_POSTS_TRACKLIST_ERROR:
          return{...state,fetching:false,error:payload};
      break;
  
    default:
      return state
      break;
  }
}


