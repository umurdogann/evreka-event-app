import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
	width: 100%;
	height: 17.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.img`
	border: none;
	outline: none;
	height: 4rem;
	width: 4rem;
	animation: ${rotate} 1.5s linear infinite;
`;
