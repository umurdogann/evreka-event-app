import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const TabsContainer = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	flex-direction: row;
	align-items: center;
	gap: 2.5rem;
	&.action {
		justify-content: center;
	}
`;

export const Hr = styled.hr`
	position: absolute;
	bottom: 1px;
	width: 100%;
	z-index: 1;
	border-color: #8997b2;
	border-top: none;
	border-bottom-width: 2px;
`;

export const TabTitle = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.3rem;
	padding: 0 0.3rem 0.5rem 0.3rem;
	padding-bottom: 0.2rem;
	text-align: center;
	color: rgba(0, 0, 0, 0.2);
	font-weight: bold;
	cursor: pointer;
	border-bottom: 4px solid transparent;
	transition: 150ms ease-in-out;
	${(props) =>
		props.action &&
		`
    letter-spacing: 0.1rem;
    font-size: 19px;
    `}
	&.selected {
		border-bottom: 4px solid #3da836;
		color: #172c49;
		z-index: 2;
	}
`;

export const ContentContainer = styled.div`
	width: 100%;
`;

export const Number = styled.div`
	height: 19px;
	width: 19px;
	background-color: #172c49;
	border-radius: 50%;
	color: #fff;
	font-size: 12px;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 0.1rem;
	box-sizing: border-box;
`;
