import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
`;
export const PropertyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Span = styled.div`
	font-size: 0.875rem;
	color: #172c49;
	&.title {
		font-weight: bold;
	}
`;
