import React from 'react';
import ActionTab from './ActionTab';
import EventDetailsTab from './EventDetailsTab';

const Tab = ({ type, ...props }) => {
	const components = {
		eventDetails: <EventDetailsTab {...props} />,
		action: <ActionTab {...props} />,
	};
	return components[type];
};

export default Tab;
