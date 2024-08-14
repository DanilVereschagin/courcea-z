import React from 'react';
import classes from './FormButton.module.css';

const FormButton = ({ children, ...props }) => {
	return (
		<button {...props} className={classes.formBtn}>
			{children}
		</button>
	);
};

export default FormButton;
