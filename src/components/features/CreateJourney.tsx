import { Container, Col, Row, Form, InputGroup, Button } from "react-bootstrap";

const CreateJourney: React.FC = () => {
	return (
		<Container className='create-journey'>
			<Row>
				<Col md={10} lg={8} xxl={6} className='create-journey__create-container m-auto d-flex justify-content-center'>
					<InputGroup>
						<Form.Control className='create-journey__input-creator' placeholder='Enter journey name' />
						<Button>Create Journey</Button>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	);
};
export default CreateJourney;
