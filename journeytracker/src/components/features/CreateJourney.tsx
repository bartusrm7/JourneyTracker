import { Container, Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setAddJourneyDataContainer } from "../../store/journeySlice";

const CreateJourney: React.FC = () => {
	const dispatch = useDispatch();
	const [toAssignJourney, setToAssignJourney] = useState<string>("");

	const handleCreateJourneyName = () => {
		if(!toAssignJourney)return

		dispatch(setAddJourneyDataContainer(toAssignJourney));
		setToAssignJourney("");
	};

	return (
		<Container className='create-journey'>
			<Row>
				<Col md={10} lg={8} xxl={6} className='create-journey__create-container m-auto d-flex justify-content-center'>
					<InputGroup>
						<Form.Control
							className='create-journey__input-creator global-input'
							placeholder='Enter journey name'
							value={toAssignJourney}
							onChange={e => setToAssignJourney(e.target.value)}
						/>
						<Button className='create-journey__create-btn global-btn' onClick={handleCreateJourneyName}>
							Create Journey
						</Button>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	);
};
export default CreateJourney;
