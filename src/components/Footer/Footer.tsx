import { FC } from 'react';
import { isDarktheme } from '../../store/theme/selectors';
import { toggleThemeAction } from '../../store/theme/actions';
import { DarkIcon, LightIcon } from '../../assets/icons/icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './Footer.scss';


export const Footer: FC = () => {

    const dispatch = useAppDispatch();
  
    const isDark = useAppSelector(isDarktheme);
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <p className='footer__text'>©2022 Blogfologo</p>
                
                <div className='footer__theme-box'>
                        <button className='footer__theme-btn'
                        onClick={() => dispatch(toggleThemeAction())}
                        disabled = {isDark}>
                            <DarkIcon/>
    
                        </button>
                        <button className='footer__theme-btn'
                        onClick={() => dispatch(toggleThemeAction())}
                        disabled = {!isDark}
                        >
                        <LightIcon/>
                        </button>
                    </div>
            </div>
            
        </footer>
    )
};
