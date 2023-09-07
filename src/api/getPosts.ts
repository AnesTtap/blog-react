import axios from "axios";
import { IPostsParams } from "../interfaces/IPostsParams";
import { urls } from "./urls";

export const getPosts = async ({searchValue = '', offset = 1} : IPostsParams) => {
    const response =await axios.get(`${urls.GET_POSTS}&search=${searchValue}&offset=${offset}`);
    const data = response.data;
    return data.results;
}