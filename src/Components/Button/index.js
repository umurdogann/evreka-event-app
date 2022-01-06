import React from 'react';
import { StyledButton } from './styled';

const Button = ({ title, ...props }) => {
	return <StyledButton {...props}>{title}</StyledButton>;
};

export default Button;
