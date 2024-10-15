import { Container, Row, Col, Form, Accordion, InputGroup, Button } from "react-bootstrap";

const DestinationContainer: React.FC = () => {
	return (
		<Container className='destination-container pt-5'>
			<Row>
				<Col xl={10} className='m-auto'>
					<Form className='destination-container__main-container'>
						<Form.Text className='p-3 d-flex justify-content-center'>Journey Name</Form.Text>
						<Accordion>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>Travel Plan</Accordion.Header>
								<Accordion.Body>
									<InputGroup>
										<Form.Control></Form.Control>
										<Button>Add</Button>
									</InputGroup>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
						<Accordion>
							<Accordion.Item eventKey='1'>
								<Accordion.Header>Must-Have Items</Accordion.Header>
								<Accordion.Body>
									<InputGroup>
										<Form.Control></Form.Control>
										<Button>Add</Button>
									</InputGroup>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
						<Accordion>
							<Accordion.Item eventKey='2'>
								<Accordion.Header>Travel Budget and Estimated Costs</Accordion.Header>
								<Accordion.Body>
									<InputGroup>
										<Form.Control></Form.Control>
										<Button>Add</Button>
									</InputGroup>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
						<Accordion>
							<Accordion.Item eventKey='3'>
								<Accordion.Header>Trip Photos and Memories</Accordion.Header>
								<Accordion.Body>
									<InputGroup>
										<Form.Control></Form.Control>
										<Button>Add</Button>
									</InputGroup>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
export default DestinationContainer;
