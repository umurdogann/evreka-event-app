import React, { useState } from 'react';
import { ButtonContainer, Counter, InfoContainer, InputContainer, Span, TakeActionContainer, TextArea } from './styled';
import Button from '../../Button/index';
const TakeAction = ({ callback, option, detail, setDetail }) => {
	return (
		<TakeActionContainer>
			<InfoContainer>
				<Span className='title'>{option.title}</Span>
				<Span className='take-action-text'>{option.text}</Span>
			</InfoContainer>
			<InputContainer>
				<Span className='title'>Resolution Detail*</Span>
				<TextArea
					placeholder='Enter resolution detail...'
					value={detail}
					onChange={({ target: { value } }) => {
						setDetail(value.length > 300 ? value.substring(0, 300) : value);
					}}
				/>
				<Counter>({detail.length}/300)</Counter>
			</InputContainer>
			<ButtonContainer>
				<Button className='secondary' title='BACK' style={{ maxWidth: '8rem' }} onClick={() => callback(0)} />
				<Button
					className='primary'
					style={{ maxWidth: '11rem' }}
					title='TAKE ACTION'
					onClick={() => callback(2, detail !== '' ? true : null)}
				/>
			</ButtonContainer>
		</TakeActionContainer>
	);
};

export default TakeAction;
