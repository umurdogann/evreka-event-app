import React from 'react';
import Audio from './audio';
import Image from './image';
import { Container } from './styled';

const components = { audio: <Audio />, image: <Image /> };

const Media = () => {
	return <Container>{components.image}</Container>;
};

export default Media;
