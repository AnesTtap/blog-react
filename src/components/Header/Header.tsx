import { FC,useEffect,useState } from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { IconButton } from '../IconButton/IconButton';
import search from '../../assets/icons/search.svg';
import cancel from '../../assets/icons/cancel.svg';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { isDarktheme } from '../../store/theme/selectors';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { getPostsAction, resetPostAction } from '../../store/posts/actions';
;

export const Header: FC = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, SetSearchValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (openSearch) {
            navigate('/search')
        }
         
    }, [openSearch, navigate])

    const isDark = useAppSelector(isDarktheme);

    const handleTogggleClick = () => {
        setOpenSearch(!openSearch);//Открывает и закрывает поисковую строку
        SetSearchValue('');//очищает поисковую строку
    }

    const handleChangeSearch = (searchValue:string) => {
        SetSearchValue(searchValue);
        if(searchValue) {
            dispatch(getPostsAction({searchValue}))
        }else {
            dispatch(resetPostAction())
        }
    }
   

    return (
        <header className={`header-theme ${isDark ? 'dark' : 'light '}`}>
        <header className='header'>
            <BurgerMenu/>
            {openSearch && (
                <div className='header__search-input'>
                    <input
                    type='text'
                    className='header__search-input'
                    placeholder='Search...'
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
        </header>
    )
};
