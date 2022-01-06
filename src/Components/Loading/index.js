import React, { useEffect } from 'react';
import loadingIcon from '../../Assets/images/loading.png';
import { LoadingContainer, LoadingIcon } from './styled';

const Loading = ({ isSuccess, callback }) => {
	useEffect(() => {
		setTimeout(() => {
			callback(isSuccess ? 3 : 4);
		}, 1000);
	}, [callback, isSuccess]);
	return (
		<LoadingContainer>
			<LoadingIcon src={loadingIcon} />
		</LoadingContainer>
	);
};

export default Loading;
