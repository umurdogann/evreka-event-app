import React, { useState } from 'react';
import { Icon, ModalPicture, ModalPictureContainer, PictureContainer } from './styled';
import pictureSkeleton from '../../../../Assets/images/pictureSkeleton.png';
import fullScreenIcon from '../../../../Assets/images/fullScreenIcon.png';
import exitFullScreenIcon from '../../../../Assets/images/exitFullScreen.png';
import Modal from '../../../Modal';
const Image = ({ url }) => {
	const [show, setShow] = useState(false);
	return (
		<>
			<PictureContainer src={url} skeleton={pictureSkeleton}>
				<Icon src={fullScreenIcon} onClick={() => setShow(true)} />
			</PictureContainer>
			<Modal
				show={show}
				setShow={() => setShow(false)}
				content={
					<ModalPictureContainer>
						<ModalPicture src={url} />
						<Icon src={exitFullScreenIcon} onClick={() => setShow(false)} />
					</ModalPictureContainer>
				}
			/>
		</>
	);
};

export default Image;
