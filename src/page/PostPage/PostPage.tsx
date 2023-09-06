import { FC, useEffect, useState } from 'react';
import './PostPage.scss';
import { IconButton } from '../../components/IconButton/IconButton';
import { Typography } from '../../components/Typography/Typography';
import { cards } from '../../mock/cards';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import menu from '../../assets/icons/More-Horizontal.svg';
import arrowPrev from '../../assets/icons/arrowPrev.svg'
import arrowNext from '../../assets/icons/arrowNext.svg'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ICard } from '../../interfaces/ICard';
import { getPost } from '../../api/getPost';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { isDarktheme } from '../../store/theme/selectors';

export const PostPage: FC = () => {
    const { id} = useParams();
    const isDark = useAppSelector(isDarktheme)
    const {title, image} = cards [0];
    const [post, setPost] = useState<null | ICard>(null);

    

    useEffect(() =>{
        if(id) {
            getPost({id}).then((data) => {
                setPost(data);
                
            })
        }

    },[id]);

    const breadcrumbsPaths = ({title}: ICard) => {
        return[
            {name:'Home', url: '/posts', isActive: true},
            {name:`Post  ${title}`, url:' ', isActive: false},
        ]

    }

    return (
       <div className='post'>
        {post && ( 
            <>
            <Breadcrumbs path={breadcrumbsPaths(post)}/>
        <Typography content={post.title} type='H1'/>
        <div className='post__img-box'>
            <img src={post.image} alt={post.title} className='post__img'/>
        </div>
        <div className='post_content'>
            <Typography
            content={post.text}
            type='textPrimary'/>
            <br></br>

            

            <div className='post__action'>
                <div className='post__action-likes'>
                    <button  className='btn_ss' onClick={() => console.log('Facebook')} >
                    <a href="https://ru-ru.facebook.com/">
                        <img src={facebook} alt='facebook'></img>
                        </a>
                    </button>
                    <button  className='btn_ss' onClick={() => console.log('Twitter')}>
                    <a href="https://twitter.com/i/flow/login">
                        <img src={twitter} alt='twitter'></img>
                    </a>
                        
                    </button>
                    <IconButton onClick={ ()=>console.log('Menu')} withBackground>
                        <img src={menu} alt='menu'/>
                </IconButton>
                    
                </div>
        </div>

                <div className="post__transitions">
            <IconButton onClick={() => console.log('arrowPrev')}>
                <div className='post__transitions-box'>
                    <img src={arrowPrev} alt='prev'/>
                    <div className='post__transitions-text prev'>
                        <div className={`post__transitions-titl  ${isDark && 'dark'}`}>Prev</div>
                    </div>
                </div>
            </IconButton>

            <IconButton onClick={() => console.log('arrowNext')}>
                <div className='post__transitions-box'>
                    <div className='post__transitions-text next'>
                        <div className={`post__transitions-title ${isDark && 'dark'}`}>Next</div>
                    </div>
                    <img src={arrowNext} alt='next'/>
                </div>
            </IconButton>
        </div>
                
            
        </div>
        </>
        )}
       </div>
    )
};