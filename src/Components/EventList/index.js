import React from 'react';
import { Container, EventContainer, EventProperty, Span } from './styled';
import moment from 'moment';

const Event = ({ selected, data, clickCallback }) => {
	
	return (
		<EventContainer
			className={selected && 'selected'}
			action={data.details[4].value}
			onClick={clickCallback}
		>
			{data.details.slice(0, 5).map((property, index) => {
				let title = property.title;
				let value = property.value;
				if (!index) value = moment(value).format('DD.mm.yyyy HH:mm');
				return (
					<EventProperty key={index}>
						<Span className='title'>{title}</Span>
						<Span>{value}</Span>
					</EventProperty>
				);
			})}
		</EventContainer>
	);
};

const EventList = ({ data, selected, setSelected }) => {
	return (
		<Container>
			{data.map((item, index) => {
				return (
					<Event
						key={index}
						data={item}
						selected={selected === index}
						clickCallback={() => setSelected(index)}
					/>
				);
			})}
		</Container>
	);
};

export default EventList;
