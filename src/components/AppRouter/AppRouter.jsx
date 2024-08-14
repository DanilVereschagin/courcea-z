import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../../router/router';
import { AuthContext } from '../../context';
import Loader from '../UI/loader/Loader';

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext);

	if (isLoading) {
		return <Loader></Loader>;
	}

	return (
		<>
			{isAuth ? (
				<Routes>
					{privateRoutes.map((route) => (
						<Route
							path={route.path}
							Component={route.component}
							exact={route.exact}
							key={route.path}
						/>
					))}
					<Route
						path='/login'
						key={'/login'}
						element={<Navigate to='/' replace />}
					/>
					<Route
						path='*'
						key={'*'}
						element={<Navigate to='/error' replace />}
					/>
				</Routes>
			) : (
				<Routes>
					{publicRoutes.map((route) => (
						<Route
							path={route.path}
							Component={route.component}
							exact={route.exact}
							key={route.path}
						/>
					))}
					<Route
						path='*'
						key={'*'}
						element={<Navigate to='/login' replace />}
					/>
				</Routes>
			)}
		</>
	);
};

export default AppRouter;
