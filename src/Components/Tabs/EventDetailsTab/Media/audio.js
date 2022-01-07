import React from 'react';

const Audio = ({ url }) => {
	return (
		<audio controls style={{ width: '100%' }}>
			<source src={url} type='audio/mp3' />
		</audio>
	);
};

export default Audio;
