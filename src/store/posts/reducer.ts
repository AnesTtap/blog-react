import {RESET_POST, GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, } from "./actionsTypes";
import { ActionType, IPostState } from "./interfaces";

const initialState: IPostState = {
  posts: null,
  loading: false,
  error: null,
  countPosts: 0,
};

export const postsReducer = (state = initialState, action: ActionType): IPostState => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.data,
        
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      case RESET_POST: 
      return initialState
      
    default:
      return state;
  }
};