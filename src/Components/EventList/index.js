import React from 'react';
import { Container, EventContainer, EventProperty, Span } from './styled';

const Event = ({ state }) => {
	const propertyTitles = ['Tarih', 'Tip', 'Rota İsmi', 'Kategori', 'Aksiyon'];
	return (
		<EventContainer className={state}>
			{propertyTitles.map((property, index) => {
				return (
					<EventProperty key={index}>
						<Span className='title'>{property}</Span>
						<Span>lorem ipsun</Span>
					</EventProperty>
				);
			})}
		</EventContainer>
	);
};

const EventList = () => {
	return (
		<Container>
			<Event state='no-action' />
			<Event state='selected' />
			<Event />
			<Event />
			<Event />
			<Event />
			<Event />
			<Event />
			<Event />
			<Event />
			<Event />
			<Event />
			<Event />
			<Event />
		</Container>
	);
};

export default EventList;
