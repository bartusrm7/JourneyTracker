import { Container, Accordion } from "react-bootstrap";

const DestinationContainer: React.FC = () => {
	return (
		<Container className='destination-container pt-5'>
			<Accordion>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Accordion1</Accordion.Header>
					<Accordion.Body>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint ducimus nesciunt consectetur explicabo
							adipisci dignissimos impedit. Consequatur, quis quibusdam.
						</div>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey='1'>
					<Accordion.Header>Accordion2</Accordion.Header>
					<Accordion.Body>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint ducimus nesciunt consectetur explicabo
							adipisci dignissimos impedit. Consequatur, quis quibusdam.
						</div>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	);
};
export default DestinationContainer;
