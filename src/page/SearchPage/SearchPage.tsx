import { FC } from 'react';
import './SearchPage.scss';
import { Typography } from '../../components/Typography/Typography';
import { SearchList } from '../../components/SearchList/SearchList';
import { useAppSelector } from '../../store/hooks';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';


export const SearchPage: FC = () => {
    const{posts} = useAppSelector(state => state.posts)
    return (
        <>
        <Breadcrumbs path={[createBackToHomePath]}/>
        <Typography content='Search results ‘Astronauts’' type='H1'/>
        {posts ? <SearchList posts={posts}/> : <Typography content='Use search to find posts' type='H2'/>}
        </>
    )
};
