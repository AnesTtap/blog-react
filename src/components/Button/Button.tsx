import { FC } from 'react';
import './Button.scss';
import { useAppContext } from '../../contexts/AppContext';

interface IButton {
    isDisabled?: boolean;
    type: 'primary' | 'secondary' | 'secondary2';
    content : string;
    onClick? : () => void;

}    

export const Button : FC<IButton> = ({content, isDisabled = false ,onClick , type }) => {
     
   const { isDarkTheme } = useAppContext();

   const buttonClass = `button button--${type} ${isDisabled ? 'disabled' : 'active'} ${isDarkTheme() && 'dark'}`
   
   
    return (
        <button
        className={buttonClass}
        onClick ={onClick}
        disabled = {isDisabled}
        type='button'
        >
            {content}
        </button>
    )
}