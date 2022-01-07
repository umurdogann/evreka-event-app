import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const PictureContainer = styled.div`
	width: 100%;
	height: 260px;
	background-image: url(${(props) => props.src});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
`;

export const Icon = styled.img`
	filter: brightness(0.8);
	border: none;
	outline: none;
	width: 24px;
	height: 24px;
	position: absolute;
	right: 1.5rem;
	bottom: 1.5rem;
	cursor: pointer;
	transition: 150ms ease-in-out;
	&:hover {
		transform: scale(1.4);
	}
`;

export const ModalPictureContainer = styled.div`
	width: 657px;
	height: 438px;
	background-color: #fff;
	padding: 1rem;
	position: relative;
`;

export const ModalPicture = styled.img`
	border: none;
	outline: none;
	width: 100%;
	height: 100%;
`;
