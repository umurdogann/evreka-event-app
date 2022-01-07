import styled from 'styled-components';

export const ModalContainer = styled.div`
	width: ${(props) => (props.small ? '32rem' : '50rem')};
	background-color: #fff;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
	border-radius: 12px;
	padding: 3rem 2.5rem 2rem 2.5rem;
	position: relative;
	@media (max-width: 992px) {
		width: 100%;
	}
`;

export const SelectActionConainer = styled.div`
	width: 100%;
	min-height: 14.375rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Span = styled.div`
	font-size: 0.875rem;
	color: #454f63;
	&.title {
		color: #172c49;
		font-weight: bold;
		font-size: 1rem;
	}
	&.take-action-text {
		font-size: 1rem;
	}
	@media (max-width: 992px) {
		font-size: 0.75rem;
		&.title {		
		font-size: 0.85rem;
	}
	&.take-action-text {
		font-size: 0.85rem;
	}
	}
`;

export const OptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.75rem;
`;

export const Option = styled.div`
	background-color: #f4f4f4;
	width: 100%;
	height: 4.5rem;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	padding: 1rem 0.875rem;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	cursor: pointer;
	&:hover {
		${(props) => !props.className && 'filter:brightness(0.9);'}
	}
	&.selected {
		background-color: #454f63;
		${Span} {
			color: #fff;
		}
	}
	@media (max-width: 992px) {
		height:fit-content;
		padding:0.5rem;
	}
`;

export const CloseIcon = styled.div`
	background-image: url(${(props) => props.src});
	background-size: cover;
	width: 1rem;
	height: 1rem;
	cursor: pointer;
	position: absolute;
	top: 1rem;
	right: 1rem;
	&:hover {
		transform: scale(1.2);
	}
`;

export const TakeActionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const InfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.1rem;
	margin-bottom: 1.5rem;
`;
export const InputContainer = styled.div`
	width: 100%;
	position: relative;
`;
export const TextArea = styled.textarea`
	margin-top: 0.25rem;
	padding: 1rem;
	width: 100%;
	height: 10rem;
	resize: none;
	outline: none;
	border: 0.5px solid lightgray;
	border-radius: 6px;
	font-size: 0.875rem;
	color: #454f63;
	&::placeholder {
		color: rgba(69, 79, 99, 0.5);
	}
	&:focus {
		border-color: #3da836;
	}
	::-webkit-scrollbar {
		-webkit-appearance: none;
		height: 0.75rem;
		width: 0.2rem;
	}
	::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.4);
		margin: 5px 0 5px 5px;
		border-radius: 5px;
	}
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 5px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.2);
	}
`;
export const Counter = styled.div`
	font-size: 0.75rem;
	color: #454f63;
	position: absolute;
	right: 0.5rem;
	bottom: 0.5rem;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	margin-top: 1.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1.2rem;
`;
