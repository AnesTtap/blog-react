import { FC } from 'react';
import './SearchList.scss';
import { cards } from '../../mock/cards';
import { SearchCard } from '../SearchCard/SearchCard';



interface ISearchList {
    
}

export const SearchList: FC<ISearchList> = () => {
    return (
        <ul className='search-list'>
            {cards.map(({id,date,title,image})  => (
            <SearchCard key={id} id={id} date={date} image={image} title={title}/>)) 
            }
            
        </ul>
    )
};
