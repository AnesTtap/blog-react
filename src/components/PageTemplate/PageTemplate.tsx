import { FC,ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { useAppContext } from '../../contexts/AppContext';


interface IPageTemplate {
    children?: ReactNode;
}

export const PageTemplate: FC<IPageTemplate> = ({children}) => {

    const { toggleTheme } = useAppContext();

    const handleToggleTheme = () => {
        toggleTheme();
    }

    return (
        <>
        <Header/>
            {<Container>
                {children}
            
            </Container>}
        <Footer/>
    
        </>
    )
};
