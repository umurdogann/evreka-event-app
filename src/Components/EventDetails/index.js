import React, { useState } from 'react';
import { ButtonContainer, Container } from './styled';
import Button from '../Button/index';
import Tabs from '../Tabs';
import Modal from '../Modal';

const EventDetails = () => {
	const [showModal, setShowModal] = useState(false);
	const [showButtons, setShowButtons] = useState(true);

	const handleClick = () => {
		setShowButtons(false);
	};

	return (
		<Container>
			{showButtons && (
				<ButtonContainer>
					<Button className='secondary' title='NO ACTION NEEDED' onClick={handleClick} />
					<Button className='primary' title='TAKE ACTION' onClick={() => setShowModal(true)} />
					{showModal && (
						<Modal
							show={showModal}
							setShow={() => setShowModal(false)}
							content={<Tabs type='action' closeCallback={() => setShowModal(false)} />}
						/>
					)}
				</ButtonContainer>
			)}
			<Tabs type={'eventDetails'} />
		</Container>
	);
};

export default EventDetails;
