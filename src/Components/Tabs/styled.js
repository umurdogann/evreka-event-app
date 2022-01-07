import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	@media (max-width: 992px) {
		gap:1rem;
		max-height:60vh;
	}
	
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
	@media (max-width: 992px) {
		justify-content:space-around;
		gap:0;
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
		props.forAction &&
		`
    letter-spacing: 0.1rem;
    font-size: 1.1875rem;
    `}
	&.selected {
		border-bottom: 4px solid #3da836;
		color: #172c49;
		z-index: 2;
	}
	@media (max-width: 992px) {
		font-size: 0.875rem;
		text-align:center;
		gap:0.3rem;
		${(props) =>
		props.forAction &&
		`
    letter-spacing: 0rem;
    font-size: 0.8rem;
    `}
	}
`;

export const ContentContainer = styled.div`
	width: 100%;
	@media (max-width: 992px) {
		height:45vh;
	}
`;

export const Number = styled.div`
	height: 1.1875rem;
	width: 1.1875rem;
	background-color: #172c49;
	border-radius: 50%;
	color: #fff;
	font-size: 0.75rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 0.1rem;
	box-sizing: border-box;
	@media (max-width: 992px) {
		padding-left:0;
		height:1rem;
		width:1rem;
	}
`;
