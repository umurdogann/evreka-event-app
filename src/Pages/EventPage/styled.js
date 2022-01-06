import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
	padding: 68px 55px;
	background-color: #172c49;
	width: 100%;
	height: 100vh;
`;

export const Wrapper = styled.div`
	background-color: #ebefec;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	gap: 1rem;
	justify-content: flex-start;
	padding-top: 2rem;
`;

export const SideContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	&.list-container {
		max-width: 885px;
	}
	&.details-container {
		max-width: 475px;
	}
`;

export const Header = styled.span`
	font-size: 23px;
	font-weight: bold;
	color: #172c49;
	&.list-header {
		margin-left: 18px;
	}
`;
