import React from 'react';

const Audio = () => {
	return (
		<audio controls style={{ width: '100%' }}>
			<source src={'https://media.evreka.co/1580120425.mp3'} type='audio/mp3' />
		</audio>
	);
};

export default Audio;
