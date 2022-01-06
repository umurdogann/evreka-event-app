import React from 'react';
import { Option, OptionWrapper, SelectActionConainer, Span } from './styled';
import Button from '../../Button/index';
const SelectAction = ({ callback, action, setAction, options }) => {
	return (
		<SelectActionConainer>
			<OptionWrapper>
				{options.map((option, index) => {
					return (
						<Option key={index} className={index === action && 'selected'} onClick={() => setAction(index)}>
							<Span className='title'>{option.title}</Span>
							<Span>{option.title}</Span>
						</Option>
					);
				})}
			</OptionWrapper>
			<Button
				disabled={action === -1}
				className='primary'
				title='NEXT'
				style={{ width: '7.5rem' }}
				onClick={() => callback(1)}
			/>
		</SelectActionConainer>
	);
};

export default SelectAction;
