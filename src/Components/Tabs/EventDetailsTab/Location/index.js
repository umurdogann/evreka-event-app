import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../../../../Assets/images/marker.png';
import { AddressContainer, Container, Span } from './styled';
import Loading from '../../../Loading';

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

const Location = ({ data }) => {
	const [address, setAddress] = useState('Loading...');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		reverseGeoCoding({ lng: data.longitude, lat: data.latitude });
	}, [data.latitude, data.longitude]);
	async function reverseGeoCoding(coordinates) {
		setLoading(true);
		const data = await (await fetch(GEOCODE_URL + `${coordinates.lng},${coordinates.lat}`)).json();
		setAddress(data.address.LongLabel);
		setLoading(false);
	}

	return (
		<Container>
			{!loading ? (
				<>
					<AddressContainer>
						<Span className='title'>Address</Span>
						<Span>{address}</Span>
					</AddressContainer>
					<MapContainer
						style={{ width: '100%', height: '28.5625rem', zIndex: '2', maxHeight: '37vh' }}
						center={[data.latitude, data.longitude]}
						zoom={16}
						scrollWheelZoom={false}
					>
						<TileLayer
							attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker icon={MarkerIcon} position={[data.latitude, data.longitude]}></Marker>
					</MapContainer>
				</>
			) : (
				<Loading />
			)}
		</Container>
	);
};

export default Location;
