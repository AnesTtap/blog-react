import { FC,useState } from 'react';
import './Header.scss';
import logotip from '../../assets/icons/logotip.svg';
import { UserInfo } from '../UserInfo/UserInfo';
import { IconButton } from '../IconButton/IconButton';
import search from '../../assets/icons/search.svg';
import cancel from '../../assets/icons/cancel.svg';


export const Header: FC = () => {
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
        <header className='header'>
            <div className='logotip'>
                <img className='logotip-img' src={ logotip }alt='logotip'/>
            </div>
            {openSearch && (
                <div className='header__search-input'>
                    <input
                    type='text'
                    className='header__search-input'
                    placeholder='search...'
                    value={searchValue}
                    onChange={(e) => handleChangeSearch(e.target.value)}/>
                </div>
            )}
            <div className='header__box'>
                <div className='header__search'>
                    <IconButton onClick = {handleTogggleClick}>
                        {openSearch ? (
                            <img src ={cancel} alt='cancel'/>
                        ) : (
                            <img src= {search} alt ='search'/>
                        )}
                    </IconButton>
                </div>
                <UserInfo username='Artem Malkin'/>
            </div>
        </header>
    )
};
