import { ICard } from "../../interfaces/ICard";
import { getPosts } from '../../api/getPosts';
import { IGetPostsRequestAction, IGetPostsErrorAction, IGetPostsSuccessAction, ActionType, IResetPostAction,} from "./interfaces";
import { GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, RESET_POST, } from './actionsTypes';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPostsParams } from "../../interfaces/IPostsParams";


const getPostsRequestAction = (): IGetPostsRequestAction => {
  return { type: GET_POSTS_REQUEST };
}

const getPostsSuccessAction = (data: ICard[]): IGetPostsSuccessAction => {
  return { type: GET_POSTS_SUCCESS, payload: { data } };
}

const getPostsErrorAction = (): IGetPostsErrorAction => {
  return { type: GET_POSTS_ERROR, payload: { error: 'Unknown error' } };
}


export const getPostsAction = ({searchValue, offset} : IPostsParams) => async (dispatch: ThunkDispatch<RootState, unknown, ActionType>)  => {
    try {
      dispatch(getPostsRequestAction());
      const data =await getPosts({searchValue, offset});
      dispatch(getPostsSuccessAction(data));

    } catch (error) {
      dispatch(getPostsErrorAction());
    }
};

export const resetPostAction = () : IResetPostAction => {
  return { type: RESET_POST}
}