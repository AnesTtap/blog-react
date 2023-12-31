import { FC, useState, useRef, useEffect, KeyboardEvent } from 'react';
import './SignIn.scss';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';



export const SignIn: FC = () => {

    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    useEffect (() => {
        if(inputEmailRef.current){
            inputEmailRef.current.focus();
        }
    }, []);

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue)
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue)
    }

   
    const handleSubmit = () => {
        console.log('Форма отправлена на сервер');
        
    }
    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key ==='Enter' && inputPasswordRef.current && email) {
            inputPasswordRef.current.focus();
        }


    }

    return (
        
        <div className='sign-in'>
            <Breadcrumbs path={[createBackToHomePath]}/>
            <Typography content='Sign In' type='H1'/>
            <form className='sign-in__form'>
            <Input 
            title ='Email'
            placeholder='Your email'
            value={email}
            handleChange={handleChangeEmail}
            inputRef={inputEmailRef}
            handleKeyUp ={handleKeyUp}
            />
<div>
            <Input 
            title ='Password'
            placeholder='Your password'
            value={password}
            handleChange={handleChangePassword}
            inputRef={inputPasswordRef}/>
            <a className='sign-in__form-forgot' href="http://example.com">
            Forgot password?
                    </a>
</div>
            <Button content='Sign In' onClick={handleSubmit}  type={'primary'}/>

                <p  className='sign-in__form-description'>
                Don’t have an account?  {''}
                    <a className='sign-in__form-link' href="http://example.com">
                        Sign In
                    </a>
                </p>


            </form>
        </div>
    )
};
