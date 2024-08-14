import React from 'react';
import classes from './FormInput.module.css';

const FormInput = React.forwardRef((props, ref) => {
	return <input ref={ref} className={classes.formInput} {...props} />;
});

export default FormInput;
