import React from 'react';
import Audio from './audio';
import Image from './image';
import { Container } from './styled';

const Media = ({ data }) => {
	const components = { audio: <Audio url={data.url} />, image: <Image url={data.url} /> };
	return <Container>{components[data.type]}</Container>;
};

export default Media;
