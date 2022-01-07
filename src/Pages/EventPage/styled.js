import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
	padding: 4.25rem 3.4375rem;
	background-color: #172c49;
	width: 100%;
	height: 100vh;
	@media (max-width: 992px) {
		padding: 0;
		overflow: hidden;
	}
	@media (max-height: 720px) {
		padding: 0;
		overflow: hidden;
	}
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
	@media (max-width: 992px) {
		padding-top: 0;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: space-between;
		border: 1px solid red;
		padding: 0.5rem;
		gap: 0.5rem;
	}
`;

export const SideContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	&.list-container {
		max-width: 55.3125rem;
	}
	&.details-container {
		max-width: 29.6875rem;
	}
	@media (max-width: 992px) {
		&.list-container {
			min-height: 33vh;
			max-height: 40vh;
		}
		&.details-container {
			max-height: 63vh;
		}
	}
`;

export const Header = styled.span`
	font-size: 1.4375rem;
	font-weight: bold;
	color: #172c49;
	&.list-header {
		margin-left: 1.125rem;
	}
	@media (max-width: 992px) {
		display: none;
	}
`;
