import { Container, Col, Row, Form, InputGroup, Button } from "react-bootstrap";

const CreateJourney: React.FC = () => {
	return (
		<Container className='create-journey'>
			<Row>
				<Col sm={12} className='create-journey__create-container d-flex justify-content-center'>
					<InputGroup>
						<Form.Control className='create-journey__input-creator' placeholder='Create journey' />
						<Button>Create Journey</Button>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	);
};
export default CreateJourney;
