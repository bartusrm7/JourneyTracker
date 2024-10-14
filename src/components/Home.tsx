import CreateJourney from "./features/CreateJourney";
import Welcome from "./features/Welcome";

const Home: React.FC = () => {
	return (
		<div>
			<Welcome />
			<CreateJourney />
		</div>
	);
};
export default Home;
