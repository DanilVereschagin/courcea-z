import React from 'react';
import classes from './NavbarButton.module.css';

const NavbarButton = ({ children, ...props }) => {
	return (
		<button {...props} className={classes.formBtn}>
			{children}
		</button>
	);
};

export default NavbarButton;
