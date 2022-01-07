import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	padding-right: 0.2rem;
	gap: 0.5rem;
	::-webkit-scrollbar {
		-webkit-appearance: none;
		height: 0.75rem;
		width: 0.2rem;
	}
	::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.4);
		margin-left: 5px;
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

export const EventContainer = styled.div`
	width: 100%;
	height: 4.375rem;
	display: flex;
	flex-direction: row;
	padding: 1.5rem 0.6rem;
	justify-content: space-between;
	background-color: #fff;
	box-shadow: 0px 3px 6px #00000014;
	border-left: 9px solid ${(props) => (props.action === '-' ? '#e9cf30' : 'transparent')};
	cursor: pointer;
	&.selected {
		background-color: #fbf5d6;
	}
	&:hover {
		${(props) =>
			props.className !== 'selected' &&
			`
    background-color: #F1F1E8;    
    `}
	}
	@media (max-width: 992px) {
		min-height: 5rem;
		gap: 1rem;
		padding: 0.5rem 0.5rem;
	}
`;

export const EventProperty = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

export const Span = styled.span`
	font-size: 0.8125rem;
	color: #172c49;
	&.title {
		font-weight: bold;
	}

	@media (max-width: 992px) {
		font-size: 0.7rem;
		text-overflow: hidden;
		word-break: break-all;
	}
`;
