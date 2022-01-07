import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;
export const PropertyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.2rem;
	margin-right: 2rem;
	@media (max-width: 992px) {
		margin-right: 1.5rem;
	}
`;

export const Span = styled.div`
	max-width: 100%;
	text-overflow: ellipsis;
	word-wrap: break-word;
	font-size: 0.875rem;
	color: #172c49;
	&.title {
		font-weight: bold;
	}
	@media (max-width: 992px) {
		font-size: 0.75rem;
	}
`;
