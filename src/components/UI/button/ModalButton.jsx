import React from 'react';
import classes from './ModalButton.module.css';

const ModalButton = ({ children, ...props }) => {
	return (
		<button {...props} className={classes.formBtn}>
			{children}
		</button>
	);
};

export default ModalButton;
