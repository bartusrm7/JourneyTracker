import { Container, Row, Col, Form, Accordion, InputGroup, Button } from "react-bootstrap";
import STRUCTURES from "../shared-components/DestinationAndPlan";

const DestinationContainer: React.FC = () => {
	return (
		<Container className='destination-container pt-5'>
			<Row>
				<Col xl={10} className='m-auto'>
					<Form className='destination-container__main-container'>
						<Form.Text className='p-3 d-flex justify-content-center'>Journey Name</Form.Text>
						{STRUCTURES.map((structure, index) => (
							<Accordion>
								<Accordion.Item eventKey='0'>
									<Accordion.Header key={index}>{structure.label}</Accordion.Header>
									<Accordion.Body>
										<InputGroup>
											<Form.Control></Form.Control>
											<Button>Add</Button>
										</InputGroup>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						))}
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
export default DestinationContainer;
