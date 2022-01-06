import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../../../../Assets/images/marker.png';
import { AddressContainer, Container, Span } from './styled';

const MarkerIcon = new L.Icon({
	iconUrl: markerIcon,
	iconSize: [70, 92],
	iconAnchor: [32, 64],
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
});
const GEOCODE_URL =
	'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=';
const Location = () => {
	const [address, setAddress] = useState('Loading...');

	useEffect(() => {
		reverseGeoCoding({ lng: 32.7762242, lat: 39.8974852 });
	}, []);
	async function reverseGeoCoding(coordinates) {
		const data = await (await fetch(GEOCODE_URL + `${coordinates.lng},${coordinates.lat}`)).json();
		setAddress(data.address.LongLabel);
	}

	return (
		<Container>
			<AddressContainer>
				<Span className='title'>Address</Span>
				<Span>{address}</Span>
			</AddressContainer>
			<MapContainer
				style={{ width: '100%', height: '457px', zIndex: '2' }}
				center={[39.8974852, 32.7762242]}
				zoom={16}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker icon={MarkerIcon} position={[39.8974852, 32.7762242]}></Marker>
			</MapContainer>
		</Container>
	);
};

export default Location;
