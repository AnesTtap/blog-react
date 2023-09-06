import { FC } from 'react';
import{ cards} from '../../../../mock/cards'
import { MediumCard } from '../MediumCard/MediumCard';
import './PostList.scss';
import { ICard } from '../../../../interfaces/ICard';
import { useNavigate } from 'react-router-dom';

interface IPostList{
    cards: ICard[];
}

export const PostList: FC<IPostList> = ({cards}) => {
    const navigate = useNavigate();
    const handleClick = (id : number) => {
        navigate(`/posts/${id}`)

    }
    const mediumCard = cards.slice(0,12);
    

    return (
        <div className='list'>
            <div>
                <div className='list__medium-card'>
                {mediumCard.map(({id, date, image, title}) =>(
                    <MediumCard key={id} id={id} date={date} image={image} title={title} onClick={handleClick}/>
                ))}
                </div>
            </div>
            
        </div>
    )
};
