import { LIMIT_POSTS } from "../constants/limit";

const BASE_URL = 'https://studapi.teachmeskills.by/';

export const urls = {
    GET_POSTS :`${BASE_URL}/blog/posts?lesson_num=2023&limit=${LIMIT_POSTS}`,
    GET_POST :`${BASE_URL}/blog/posts`

}