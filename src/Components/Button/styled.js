import styled from 'styled-components';

export const StyledButton = styled.button`
	border: none;
	flex: 1;
	width: 100%;
	min-height: 2rem;
	max-height: 2.25rem;
	color: #fff;
	font-weight: bold;
	cursor: pointer;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 4px;
	transition: 150ms ease-in-out;
	&:disabled {
		cursor: not-allowed;
		background-color: lightgray;
		box-shadow: none;
	}
	&:hover:enabled {
		filter: brightness(1.15);
	}
	&:active:enabled {
		filter: brightness(1.3);
	}
	&.primary:enabled {
		background-color: #3da836;
	}
	&.secondary:enabled {
		background-color: #454f63;
	}
	@media (max-width: 992px) {
		font-size:0.75rem;	
	}
`;
