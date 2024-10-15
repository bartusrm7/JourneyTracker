import CreateJourney from "./features/CreateJourney";
import DestinationContainer from "./features/DestinationContainer";
import Welcome from "./features/Welcome";

const Home: React.FC = () => {
	return (
		<div>
			<Welcome />
			<CreateJourney />
			<DestinationContainer />
		</div>
	);
};
export default Home;
