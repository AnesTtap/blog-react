import { FC, useState } from 'react';
import './SignUp.scss';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { createBackToHomePath } from '../../constants/createBackToHomePath';



export const SignUp: FC = () => {

    const [ name,setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangeName = (newValue: string) => {
        setName(newValue)
    }

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue)
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue)
    }

    const handleChangeConfirmPassword = (newValue: string) => {
        setConfirmPassword(newValue)
    }
    const handleSubmit = () => {
        console.log('Форма отправлена на сервер');
        
    }

    return (
        <div className='sign-up'>
            <Breadcrumbs path={[createBackToHomePath]}/>
            <Typography content='Sign Up' type='H1'/>
            <form className='sign-up__form'>
            <Input 
            title ='Name'
            placeholder='Your name'
            value={name}
            handleChange={ handleChangeName}/>

            <Input 
            title ='Email'
            placeholder='Your email'
            value={email}
            handleChange={handleChangeEmail}/>

            <Input 
            title ='Password'
            placeholder='Your password'
            value={password}
            handleChange={handleChangePassword}/>

            <Input 
            title ='Confirm Password'
            placeholder='Confirm password'
            value={confirmPassword}
            handleChange={ handleChangeConfirmPassword}/>
            <Button content='Sign Up' onClick={handleSubmit}  type={'primary'}/>

                <p  className='sign-up__form-description'>
                    Alredy have an account? {''}
                    <a className='sign-up__form-link' href="http://example.com">
                        Sign Up
                    </a>
                </p>


            </form>
        </div>
    )
};
