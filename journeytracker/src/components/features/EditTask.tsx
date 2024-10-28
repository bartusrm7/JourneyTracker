import { Button, Form, InputGroup } from "react-bootstrap";

interface EditTaskProps {
	editTaskText: string;
	isOpenEditTask: boolean;
	toggleEditTask: () => void;
	setEditTaskText: (text: string) => void;
}

const EditTask: React.FC<EditTaskProps> = ({
	editTaskText,
	isOpenEditTask,
	toggleEditTask,
	setEditTaskText,
}: EditTaskProps) => {
	return (
		<div>
			{isOpenEditTask && (
				<div className='create-accordion-item__edit-background-container d-flex justify-content-center align-items-center'>
					<div className='create-accordion-item__edit-container d-flex'>
						<InputGroup>
							<Form.Control value={editTaskText} onChange={e => setEditTaskText(e.target.value)} />
							<Button onClick={toggleEditTask}>Edit</Button>
						</InputGroup>
					</div>
				</div>
			)}
		</div>
	);
};
export default EditTask;
