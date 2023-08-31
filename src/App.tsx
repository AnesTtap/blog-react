import { PageTemplate } from './components/PageTemplate/PageTemplate';
import { BlogPage } from './page/BlogPage/BlogPage';
import { PostList } from './page/BlogPage/components/PostList/PostList';
import { PostPage } from './page/PostPage/PostPage';
import { Router } from './routes/Router';





export const App = () => {
  const handleClick =() => {
   console.log('click');
   
  }


  return (
  <div>
    <PageTemplate>
    <Router/>
    </PageTemplate>
    </div>
  );
}


