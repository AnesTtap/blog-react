import { FC, useEffect, useState} from 'react';
import './BlogPage.scss';
import { Typography } from '../../components/Typography/Typography';
import { PostList } from './components/PostList/PostList';
import { getPostsAction } from '../../store/posts/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { LIMIT_POSTS } from '../../constants/limit';
import { Pagination } from '../../components/Pagination/Pagination';





export const BlogPage: FC = () => {
    const {posts} = useAppSelector(state => state.posts);
 const dispatch = useAppDispatch();
 const[page, setPage] = useState(12);
 const {countPosts} = useAppSelector(state => state.posts);
     useEffect (() => {
       
         dispatch(getPostsAction({offset: page * LIMIT_POSTS}));
     },[dispatch, page])

     const handlePageClick = (pageNumber: number) => setPage(pageNumber);

    const handleNextClick = () => setPage(page + 1);
    
    const handlePrevClick = () => setPage(page - 1);

     return (
         <div className='blog'>
             <Typography content='Search results ‘Astronauts’' type='H1'/>
            
             {posts && <PostList cards ={posts}/> }
             <Pagination 
                        countElement={countPosts}
                        page={page}
                        handlePageClick={handlePageClick}
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
         </div>
     )
 };
 
