import { Container, Row, Col, Form, Accordion, InputGroup, Button } from "react-bootstrap";
import STRUCTURES from "../shared-components/DestinationAndPlan";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const DestinationContainer: React.FC = () => {
	const journeyContainer = useSelector((state: RootState) => state.journey.journey);
	const setIsJourneyNameExistings = useSelector((state: RootState) => state.journey.isJourneyNameExistings);

	return (
		<Container className='destination-container pt-5 pb-3'>
			{setIsJourneyNameExistings && (
				<Row>
					<Col xl={10} className='m-auto'>
						{journeyContainer.map((journey, indexJourney) => (
							<Form className='destination-container__main-container' key={indexJourney}>
								<Form.Text className='p-3 d-flex justify-content-center'>{journey.journeyName}</Form.Text>
								<Accordion>
									{STRUCTURES.map((structure, index) => (
										<Accordion key={index}>
											<Accordion.Item eventKey='0'>
												<Accordion.Header>{structure.label}</Accordion.Header>
												<Accordion.Body>
													<InputGroup>
														<Form.Control></Form.Control>
														<Button>Add</Button>
													</InputGroup>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									))}
								</Accordion>
							</Form>
						))}
					</Col>
				</Row>
			)}
		</Container>
	);
};
export default DestinationContainer;
