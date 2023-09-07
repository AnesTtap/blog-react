import { FC } from 'react';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import more from '../../assets/icons/More-Horizontal.svg';
import './ActionCard.scss';


export const ActionCard: FC = () => {
    return (
        <div className='actions-card'>
            <div className='actions-card__box'>
                <a target='blank' href="https://ru-ru.facebook.com/"><img src={facebook} alt="facebook"/> </a>
            </div>
            <div className='actions-card__box'>
                <a target='blank' href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dru"> <img src={twitter} alt="twitter" /> </a>
            </div>
            <div className='actions-card__box'>
                <img src={more} alt="more" />
            </div>
        </div>
    )
};