import React from 'react';
import { Container, PropertyWrapper, Span } from './styled';

const Details = ({ data }) => {
	return (
		<Container>
			{data.slice(5, data.length).map((property, index) => {
				if (property.value === '-') return undefined;
				return (
					<PropertyWrapper key={index}>
						<Span className='title'>{property.title}</Span>
						<Span>{property.value}</Span>
					</PropertyWrapper>
				);
			})}
		</Container>
	);
};

export default Details;
