import { FC, useState } from 'react';
import './BurgerMenu.scss';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import logotip from '../../assets/icons/logotip.svg';
import { Button } from '../Button/Button';
import { DarkIcon, LightIcon } from '../../assets/icons/icons';
import { IconButton } from '../IconButton/IconButton';
import search from '../../assets/icons/search.svg';
import cancel from '../../assets/icons/cancel.svg';
import { UserInfo } from '../UserInfo/UserInfo';




export const BurgerMenu: FC= () => {
   
        const [isOpen,setIsOpen] = useState(false); 
        const navigate = useNavigate();
        const {toggleTheme, isDarkTheme} = useAppContext();
        
        const handleClick =() =>{
            if (isOpen) {
                setIsOpen (false);
            } else {
               setIsOpen (true);
            };
        }
        console.log(isOpen);
        
    
        
        
        const handleGoTo = (url: string) => {
            navigate(url);
            setIsOpen(false);
        }
    
        const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, SetSearchValue] = useState('');

    const handleTogggleClick = () => {
        setOpenSearch(!openSearch);//Открывает и закрывает поисковую строку
        SetSearchValue('');//очищает поисковую строку
    }

    const handleChangeSearch = (newValue:string) => {
        SetSearchValue(newValue);
    }
        
        return (
            <div className='burgerMenu'>
               <div className='burgerMenu__logotip'>
                <img src={logotip} alt='logotip' onClick = {handleClick}/>
               </div>
               
            <div className={`burgerMenu__content ${isOpen && 'open'}`}>
                <div>
                <UserInfo username='Artem Malkin'/>
            <nav className='burgerMenu__nav'>
                
                <div className='burgerMenu__search-input'>
                    <input
                    type='text'
                    className='burgerMenu__search-input'
                    placeholder='search...'
                    value={searchValue}
                    onChange={(e) => handleChangeSearch(e.target.value)}/>
                </div>
            
            <div className='burgerMenu__search'>
                    <IconButton onClick = {handleTogggleClick}>
                        {openSearch ? (
                            <img src ={cancel} alt='cancel'/>
                        ) : (
                            <img src= {search} alt ='search'/>
                        )}
                    </IconButton>
                </div>
                    </nav>
                    </div>
                <div>
                    <div className='burgerMenu__theme-box'>
                        <button className='burgerMenu__theme-btn'
                        onClick={toggleTheme}
                        disabled = {isDarkTheme()}>
                            <DarkIcon/>
    
                        </button>
                        <button className='burgerMenu__theme-btn'
                        onClick={toggleTheme}
                        disabled = {!isDarkTheme()}
                        >
                        <LightIcon/>
                        </button>
                    </div>
                    <Button content='Log Out' 
                    onClick={() => console.log('Log Out')}
                    type='secondary'
                    />
               </div>
            </div>
               
            </div>
        )
    };
    