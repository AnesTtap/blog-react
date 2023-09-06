import { type } from 'os';
import {ICard } from '../../interfaces/ICard';
import {GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS} from './actionsTypes';

export interface IPostState {
    loading: boolean;
    posts: ICard[] | null;
    error: string | null;
}

export interface IGetPostsRequestAction{
    type: typeof GET_POSTS_REQUEST;
}

export interface IGetPostsSuccessAction{
    type: typeof GET_POSTS_SUCCESS;
    payload: {
        data: ICard[]
    }
}

export interface IGetPostsErrorAction {
    type: typeof GET_POSTS_ERROR;
    payload: {
        error:string;

    };
}
export type ActionType = IGetPostsRequestAction | IGetPostsSuccessAction | IGetPostsErrorAction;