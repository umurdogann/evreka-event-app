import React, { useState } from 'react';
import EventList from '../../Components/EventList';
import EventDetails from '../../Components/EventDetails';
import { Container, Header, SideContainer, Wrapper } from './styled';

const EventPage = ({ responseData }) => {
	const [selectedEvent, setSelectedEvent] = useState(-1);
	const [data, setData] = useState(responseData);

	return (
		<Container>
			<Wrapper>
				<SideContainer className='list-container'>
					<Header className='list-header'>EVENTS</Header>
					<EventList data={data} selected={selectedEvent} setSelected={setSelectedEvent} />
				</SideContainer>
				{selectedEvent !== -1 && (
					<SideContainer className='details-container'>
						<Header>EVENT DETAILS</Header>
						<EventDetails data={data} index={selectedEvent} setData={setData} />
					</SideContainer>
				)}
			</Wrapper>
		</Container>
	);
};

export default EventPage;
