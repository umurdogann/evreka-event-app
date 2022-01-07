import React, { useState } from 'react';
import { Container, ContentContainer, Hr, TabsContainer, TabTitle } from '../styled';
import Details from './Details';
import Location from './Location';
import Media from './Media';
const EventDetailsTab = ({ data }) => {
	const tabs = ['DETAILS', 'LOCATION', 'MEDIA'];
	const contents = [
		<Details data={data.details} />,
		<Location data={data.location} />,
		<Media data={data.media[0]} />,
	];
	const [selected, setSelected] = useState(0);

	return (
		<Container>
			<TabsContainer>
				{tabs.map((tab, index) => {
					return (
						<TabTitle
							key={index}
							className={selected === index && 'selected'}
							onClick={() => setSelected(index)}
						>
							{tab}
						</TabTitle>
					);
				})}
				<Hr />
			</TabsContainer>
			<ContentContainer>{contents[selected]}</ContentContainer>
		</Container>
	);
};

export default EventDetailsTab;
