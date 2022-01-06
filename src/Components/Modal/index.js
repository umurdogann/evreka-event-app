import React, { useEffect, useRef } from 'react';
import { Background } from './styled';

const Modal = ({ show, setShow, content }) => {
	const ref = useRef();

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	const handleClickOutside = (event) => {
		if (ref && ref !== null) {
			const cur = ref.current;
			if (cur && !cur.contains(event.target)) {
				setShow();
			}
		}
	};

	return (
		<Background show={show}>
			<div ref={ref}>{content}</div>
		</Background>
	);
};

export default Modal;
