import styled from 'styled-components';

export const Background = styled.div`
	box-sizing: border-box;
	width: 100vw;
	height: 100vh;
	background-color: rgba(23, 44, 73, 0.85);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;
	display: flex;
	justify-content: center;
	padding: 10rem 1rem 0 1rem;
	${(props) => !props.show && `display: none`};
	@media (max-width: 992px) {
		padding-top: 15vh;
	}
`;
