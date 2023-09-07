import { FC,ReactNode } from 'react';
import { useAppSelector } from '../../store/hooks';
import { isDarktheme } from '../../store/theme/selectors';
import './Container.scss';

interface IContainer {
    children: ReactNode;
}

export const Container: FC<IContainer> = ({children}) => {
    const isDark = useAppSelector(isDarktheme);

   
    return (
        <div className={`container-theme ${isDark ? 'dark' : 'light '}`}>
            <div className='container'>
                {children}
            </div>
            
        </div>
    )
};
