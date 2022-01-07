import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	@media (max-width: 992px) {
		max-height: 60vh;
	}
`;

export const AddressContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Span = styled.span`
	font-size: 0.875rem;
	&.title {
		font-weight: bold;
	}
	@media (max-width: 992px) {
		font-size: 0.75rem;
	}
	
`;
