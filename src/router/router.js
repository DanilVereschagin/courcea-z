import Main from '../pages/Main';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import Error from '../pages/Error';
import Login from '../pages/Login';
import PostsFeed from '../pages/PostsFeed';

export const publicRoutes = [{ path: '/login', component: Login, exact: true }];

export const privateRoutes = [
	{ path: '/', component: Main, exact: true },
	{ path: '/about', component: About, exact: true },
	{ path: '/posts', component: Posts, exact: true },
	{ path: '/posts-feed', component: PostsFeed, exact: true },
	{ path: '/posts/:id', component: PostIdPage, exact: true },
	{ path: '/error', component: Error, exact: false },
];
