import {FETCHED__POSTS_ALBUMLIST, FETCH_POSTS_ERROR} from "../actions/artistAlbumActions"

const initialState = {
  fetching:false,
  fetched:false,
  posts:[],
  error:null
}

export default function artistAlbumReducer(state=initialState, {type,payload}) {
  switch (type) {
    case FETCHED__POSTS_ALBUMLIST:
        return{...state,fetching:false,fetched:true,posts:payload};
        case FETCH_POSTS_ERROR:
          return{...state,fetching:false,error:payload};
      break;
  
    default:
      return state
      break;
  }
}


