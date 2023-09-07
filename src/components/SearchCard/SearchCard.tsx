import { FC } from 'react';
import { DateCard } from '../DateCard/DateCard';
import { Typography } from '../Typography/Typography';
import './SearchCard.scss';


interface ISearchCard {
    id:number,
    title:string,
    image:string,
    date:string,
    onClick:(id:number)=>void,
}

export const SearchCard: FC<ISearchCard> = ({id,date,image,title,onClick}) => {
    return (
        <div className='search-card'>
            <div className='search-card__content'>
                <div>
                    <div className='search-card__img-box'>
                        <img className='search-card__img' src={image} alt={title}/>
                    </div>
                </div>
                <div>
                    <DateCard date={date}/>
                    <button  className='medium-card__btn' onClick={() =>onClick(id)} >
                      <Typography content={title} type='H3' />
                </button>
                    
                </div>
            </div>
        </div>
    )
};
