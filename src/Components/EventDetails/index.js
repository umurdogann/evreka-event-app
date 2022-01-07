import React, { useState } from 'react';
import { ButtonContainer, Container } from './styled';
import Button from '../Button/index';
import Tabs from '../Tabs';
import Modal from '../Modal';
import { useEffect } from 'react/cjs/react.development';

const EventDetails = ({ index, data, setData }) => {
	const [showModal, setShowModal] = useState(false);
	const [showButtons, setShowButtons] = useState(true);

	useEffect(() => {
		setShowButtons(data[index].details[4].value === '-');
	}, [data, data.details, index]);

	const handleClick = () => {
		setShowButtons(false);
		let temp = [...data];
		temp[index].details[4].value = 'No Action Needed';
		setData(temp);
	};

	return (
		<Container>
			{showButtons && (
				<ButtonContainer>
					<Button className='secondary' title='NO ACTION NEEDED' onClick={handleClick} />
					<Button className='primary' title='TAKE ACTION' onClick={() => setShowModal(true)} />
				</ButtonContainer>
			)}
			<Tabs type={'eventDetails'} data={data[index]} />
			{showModal && (
				<Modal
					show={showModal}
					setShow={() => setShowModal(false)}
					content={
						<Tabs
							type='action'
							index={index}
							data={data}
							setData={setData}
							closeCallback={() => setShowModal(false)}
						/>
					}
				/>
			)}
		</Container>
	);
};

export default EventDetails;
