import { FC } from 'react';
import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';
import { cutText } from '../../utils/cutText';

interface IPath{
    name:string;
    url:string;
    isActive:boolean;
}

interface IBreadcrumbs {
    path:IPath[];
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({path}) => (
    <div className='breadcrumbs'>
        {path.map(({name, url, isActive}) => {
            const cutName = cutText(name,40);
          return (  
          <>
            {isActive ? ( 
                <Link className='breadcrumbs__link' key={url} to ={url}>{cutName}</Link>
                ) : ( <span className='breadcrumbs__text' key={url}>{cutName}</span>)}
                </>
            )
        })}
    </div>
)
