import styled from 'styled-components';

export const MessageContainer = styled.div`
	width: 100%;
	height: 13.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	padding-top: 1.5rem;
	gap: 0.75rem;
`;

export const Icon = styled.img`
	border: none;
	outline: none;
	width: 3.5rem;
	height: 3.5rem;
`;

export const AlertHeader = styled.span`
	font-weight: bold;
	font-size: 2rem;
	&.success {
		color: #3da836;
	}
	&.fail {
		color: #d92323;
	}
`;

export const AlertText = styled.span`
	font-size: 1rem;
	color: #454f63;
	max-width: 19.25rem;
	text-align: center;
`;
