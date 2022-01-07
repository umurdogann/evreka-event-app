import EventPage from './Pages/EventPage';
import responseData from './response.json';
function App() {
	return (
		<div className='container'>
			<EventPage responseData={responseData.data} />
		</div>
	);
}

export default App;
