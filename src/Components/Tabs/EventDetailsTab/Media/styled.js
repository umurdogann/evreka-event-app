import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const PictureContainer = styled.div`
	width: 100%;
	height: 16.25rem;
	background-image: url(${(props) => props.src});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	@media (max-width: 992px) {
		max-height: 60vh;
	}
`;

export const Icon = styled.img`
	filter: brightness(0.8);
	border: none;
	outline: none;
	width: 1.5rem;
	height: 1.5rem;
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
	width: 41.0625rem;
	height: 27.375rem;
	background-color: #fff;
	padding: 1rem;
	position: relative;
	@media (max-width: 992px) {
		width: 100%;
	}
`;

export const ModalPicture = styled.img`
	border: none;
	outline: none;
	width: 100%;
	height: 100%;
`;
