import { FC, useEffect, useState} from 'react';
import './BlogPage.scss';
import { Typography } from '../../components/Typography/Typography';
import { PostList } from './components/PostList/PostList';
import { cards } from '../../mock/cards';
import { ICard } from '../../interfaces/ICard';
import { getPosts } from '../../api/getPosts';
import { getPostsAction } from '../../store/posts/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';





export const BlogPage: FC = () => {
    const {posts,error,loading} = useAppSelector(state => state.posts);
 const dispatch = useAppDispatch();
     useEffect (() => {
       
         dispatch(getPostsAction());
     },[dispatch])
     return (
         <div className='blog'>
             <Typography content='Search results ‘Astronauts’' type='H1'/>
            
            
             {posts && <PostList cards ={posts}/> }
         </div>
     )
 };
 
