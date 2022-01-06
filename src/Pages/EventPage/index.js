import React from 'react';
import EventList from '../../Components/EventList';
import EventDetails from '../../Components/EventDetails';
import { Container, Header, SideContainer, Wrapper } from './styled';

const EventPage = () => {
	return (
		<Container>
			<Wrapper>
				<SideContainer className='list-container'>
					<Header className='list-header'>EVENTS</Header>
					<EventList />
				</SideContainer>
				<SideContainer className='details-container'>
					<Header>EVENT DETAILS</Header>
					<EventDetails />
				</SideContainer>
			</Wrapper>
		</Container>
	);
};

export default EventPage;
