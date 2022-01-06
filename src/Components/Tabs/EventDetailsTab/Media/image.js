import React, { useState } from 'react';
import { Icon, ModalPicture, ModalPictureContainer, PictureContainer } from './styled';
import pictureSkeleton from '../../../../Assets/images/pictureSkeleton.png';
import fullScreenIcon from '../../../../Assets/images/fullScreenIcon.png';
import exitFullScreenIcon from '../../../../Assets/images/exitFullScreen.png';
import Modal from '../../../Modal';
const Image = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<PictureContainer src='https://media.evreka.co/1587840179.jpg' skeleton={pictureSkeleton}>
				<Icon src={fullScreenIcon} onClick={() => setShow(true)} />
			</PictureContainer>
			<Modal
				show={show}
				setShow={() => setShow(false)}
				content={
					<ModalPictureContainer>
						<ModalPicture src='https://media.evreka.co/1587840179.jpg' />
						<Icon src={exitFullScreenIcon} onClick={() => setShow(false)} />
					</ModalPictureContainer>
				}
			/>
		</>
	);
};

export default Image;
