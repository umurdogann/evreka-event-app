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
	height: 70px;
	display: flex;
	flex-direction: row;
	padding: 1.5rem 0.6rem;
	justify-content: space-between;
	background-color: #fff;
	box-shadow: 0px 3px 6px #00000014;
	border-left: 9px solid transparent;
	cursor: pointer;
	&.no-action {
		border-left: 9px solid #e9cf30;
	}
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
`;

export const EventProperty = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Span = styled.span`
	font-size: 13px;
	color: #172c49;
	&.title {
		font-weight: bold;
	}
`;
