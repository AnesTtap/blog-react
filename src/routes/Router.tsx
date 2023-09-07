import { FC } from 'react';
import './Router.scss';
import { Route, Routes } from 'react-router-dom';
import { BlogPage } from '../page/BlogPage/BlogPage';
import { PostPage } from '../page/PostPage/PostPage';

import { SignIn } from '../page/SignIn/SignIn';
import { SearchPage } from '../page/SearchPage/SearchPage';


export const Router: FC = () => (
    <Routes>
        <Route path='/posts' element={<BlogPage/>}/>
        <Route path='/posts/:id' element={<PostPage/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='*' element={<> Такой страницы не сущесвует</>}/>
    </Routes>
);
