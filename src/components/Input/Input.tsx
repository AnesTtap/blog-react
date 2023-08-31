import { FC, RefObject, KeyboardEvent} from 'react';
import './Input.scss';

interface IInput {
    value: string;
    handleChange : (newValue: string) => void;
    title : string;
    placeholder? : string;
    isDisabled? : boolean;
    errorMessage? : string;
    inputRef?: RefObject<HTMLInputElement>;
    handleKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInput> = ({
    value, 
    title,
    placeholder,
    handleChange,
    isDisabled= false,
    errorMessage,
    inputRef,
    handleKeyUp
}) => {
    

    return (
        <div className = 'input-wrapper'>
            <label className='label' htmlFor='input-text' >{title}</label>
            <input 
            className={`input ${errorMessage && 'error'}`}
            placeholder={placeholder}
            disabled ={isDisabled}
            type ="text"
            id ='input-text'
            value ={value}
            onChange={(e) => handleChange(e.target.value)}
            ref={inputRef}
            onKeyUp={handleKeyUp}/>

            {errorMessage && <div className='errorMessage'>{errorMessage}</div>}

        </div>
    )
};
