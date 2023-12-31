import { FC } from 'react';
import { SearchCard } from '../SearchCard/SearchCard';
import { ICard } from '../../interfaces/ICard';
import { useNavigate } from 'react-router-dom';
import './SearchList.scss';



interface ISearchList {
    posts: ICard[];
    
}

export const SearchList: FC<ISearchList> = ({posts}) => {
    const navigate = useNavigate();
    const handleClick = (id : number) => {
        navigate(`/posts/${id}`)

    }
    return (
        <ul className='search-list'>
            {posts.map(({id,date,title,image})  => (
            <SearchCard key={id} id={id} date={date} image={image} title={title} onClick={handleClick}/>)) 
            }
            
        </ul>
    )
};
