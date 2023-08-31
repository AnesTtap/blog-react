import { FC, useEffect, useState} from 'react';
import './BlogPage.scss';
import { Typography } from '../../components/Typography/Typography';
import { PostList } from './components/PostList/PostList';
import { cards } from '../../mock/cards';
import { ICard } from '../../interfaces/ICard';
import { getPosts } from '../../api/getPosts';





export const BlogPage: FC = () => {
    
    return (
        <div className='blog'>
            <Typography content='Blog' type='H1'/>
             <PostList/> 
            </div>
       
    )
};
