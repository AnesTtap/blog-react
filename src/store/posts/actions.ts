import { ICard } from "../../interfaces/ICard";
import { getPosts } from '../../api/getPosts';
import { IGetPostsRequestAction, IGetPostsErrorAction, IGetPostsSuccessAction, ActionType,} from "./interfaces";
import { GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, } from './actionsTypes';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";


const getPostsRequestAction = (): IGetPostsRequestAction => {
  return { type: GET_POSTS_REQUEST };
}

const getPostsSuccessAction = (data: ICard[]): IGetPostsSuccessAction => {
  return { type: GET_POSTS_SUCCESS, payload: { data } };
}

const getPostsErrorAction = (): IGetPostsErrorAction => {
  return { type: GET_POSTS_ERROR, payload: { error: 'Unknown error' } };
}


export const getPostsAction = () => async (dispatch: ThunkDispatch<RootState, unknown, ActionType>)  => {
    try {
      dispatch(getPostsRequestAction());
      const data =await getPosts();
      dispatch(getPostsSuccessAction(data));

    } catch (error) {
      dispatch(getPostsErrorAction());
    }
};
