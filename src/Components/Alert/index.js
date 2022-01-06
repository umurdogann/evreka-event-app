import React from 'react';
import { AlertHeader, AlertText, Icon, MessageContainer } from './styled';
import successIcon from '../../Assets/images/success.png';
import failIcon from '../../Assets/images/fail.png';

const Alert = ({ isSuccess }) => {
	const icon = isSuccess ? successIcon : failIcon;
	const messageHeader = isSuccess ? 'ACTION HAS BEEN TAKEN' : 'A PROBLEM OCCURED!';
	const messageText = isSuccess
		? 'You can see the action details from details tab.'
		: 'We cannot continue due to a problem. Please try again later.';
	return (
		<MessageContainer>
			<Icon src={icon} />
			<AlertHeader className={isSuccess ? 'success' : 'fail'}>{messageHeader}</AlertHeader>
			<AlertText>{messageText}</AlertText>
		</MessageContainer>
	);
};

export default Alert;
