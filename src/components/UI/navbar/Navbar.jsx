import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { useContext } from 'react';
import NavbarButton from '../button/NavbarButton';

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	};

	return (
		<div className={classes.navbar}>
			{isAuth ? (
				<div className={classes.navbar__links}>
					<Link className={classes.navbar__links___item} to='/'>
						Главная страница
					</Link>
					<Link className={classes.navbar__links___item} to='/posts'>
						Посты
					</Link>
					<Link className={classes.navbar__links___item} to='/posts-feed'>
						Лента
					</Link>
					<Link className={classes.navbar__links___item} to='/about'>
						О сайте
					</Link>
					<NavbarButton onClick={logout}>Выйти</NavbarButton>
				</div>
			) : (
				<div className={classes.navbar__links}>
					<Link className={classes.navbar__links___item} to='/about'>
						Логин
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
