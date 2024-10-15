import { Container, Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addJourneyName } from "../../store/journeySlice";

const CreateJourney: React.FC = () => {
	const dispatch = useDispatch();
	const [toAssignJourney, setToAssignJourney] = useState<string>("");

	const handleCreateJourneyName = () => {
		dispatch(addJourneyName(toAssignJourney));
		setToAssignJourney("");
	};

	return (
		<Container className='create-journey'>
			<Row>
				<Col md={10} lg={8} xxl={6} className='create-journey__create-container m-auto d-flex justify-content-center'>
					<InputGroup>
						<Form.Control
							className='create-journey__input-creator'
							placeholder='Enter journey name'
							value={toAssignJourney}
							onChange={e => setToAssignJourney(e.target.value)}
						/>
						<Button onClick={handleCreateJourneyName}>Create Journey</Button>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	);
};
export default CreateJourney;
