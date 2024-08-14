import React from 'react';
import FormButton from '../components/UI/button/FormButton';
import FormInput from '../components/UI/input/FormInput';
import { AuthContext } from '../context/index';
import { useContext } from 'react';

const Login = () => {
	const { setIsAuth } = useContext(AuthContext);

	const login = (e) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Логин</h1>
			<form onSubmit={login}>
				<FormInput type='text' placeholder='Логин' />
				<FormInput type='password' placeholder='Пароль' />
				<FormButton>Войти</FormButton>
			</form>
		</div>
	);
};

export default Login;
