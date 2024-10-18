import { useEffect, useState } from "react";
import {
	setAddTravelPlan,
	setAddMustHaveItems,
	setBugdetAndCosts,
	setPhotosAndMemories,
	setMarkTaskDone,
} from "../../store/journeySlice";
import { useDispatch } from "react-redux";
import { Form, InputGroup, Button } from "react-bootstrap";
import { EditOutlined, DeleteOutlined } from "@mui/icons-material";

interface CreateAccordionItemProps {
	indexJourney: number;
	placeholder: string;
}

const CreateAccordionItem: React.FC<CreateAccordionItemProps> = ({
	indexJourney,
	placeholder,
}: CreateAccordionItemProps) => {
	const dispatch = useDispatch();
	const [inputAccordionValue, setInputAccordionValue] = useState<string>("");
	const [accordionListValue, setAccordionListValue] = useState<string[]>([]);
	const [isAccordionTaskDone, setIsAccordionTaskDone] = useState<boolean[]>([]);

	const handleCreateAccordionItemToCorrectContainer = (field: string) => {
		if (!inputAccordionValue) return;

		switch (field) {
			case "Travel Plan":
				dispatch(setAddTravelPlan({ journeyPlan: inputAccordionValue, indexJourney }));
				break;
			case "Must-Have Items":
				dispatch(setAddMustHaveItems({ journeyThings: inputAccordionValue, indexJourney }));
				break;
			case "Travel Budget and Estimated Costs":
				dispatch(setBugdetAndCosts({ journeyBudget: inputAccordionValue, indexJourney }));
				break;
			case "Trip Photos and Memories":
				dispatch(setPhotosAndMemories({ journeyMemories: inputAccordionValue, indexJourney }));
				break;
		}
		setAccordionListValue(prevState => [...prevState, inputAccordionValue]);
		setInputAccordionValue("");
	};

	const handleIsAccordionTaskDone = (index: number) => {
		const updatedtaskDone = isAccordionTaskDone.map((itemDone, indexDone) =>
			indexDone === index ? !itemDone : itemDone
		);
		setIsAccordionTaskDone(updatedtaskDone);
		dispatch(setMarkTaskDone({ taskDone: updatedtaskDone[index], indexTask: index }));
	};

	useEffect(() => {
		const initialState = accordionListValue.map(() => false);
		setIsAccordionTaskDone(prevState => [...prevState, ...initialState]);
	}, [accordionListValue]);

	return (
		<div>
			<Form.Group>
				<InputGroup>
					<Form.Control
						className='global-input'
						placeholder={placeholder}
						value={inputAccordionValue}
						onChange={e => setInputAccordionValue(e.target.value)}
					/>
					<Button className='global-btn' onClick={() => handleCreateAccordionItemToCorrectContainer(placeholder)}>
						Add
					</Button>
				</InputGroup>
				<Form.Text>
					{accordionListValue.map((item, index) => (
						<div
							className='create-accordion-item__created-item pt-2 position-relative d-flex align-items-center'
							key={index}>
							<div className={`create-accordion-item__item ${isAccordionTaskDone[index] ? "done-task" : ""}`}>{item}</div>
							<div className='create-accordion-item__container-actions d-flex'>
								<InputGroup.Checkbox
									className='create-accordion-item__finish-btn'
									checked={isAccordionTaskDone[index]}
									onClick={() => handleIsAccordionTaskDone(index)}
								/>
								<Button className='create-accordion-item__edit-btn accordion-group-btn changed-state-btn'>
									<EditOutlined />
								</Button>
								<Button className='create-accordion-item__remove-btn accordion-group-btn changed-state-btn'>
									<DeleteOutlined />
								</Button>
							</div>
						</div>
					))}
				</Form.Text>
			</Form.Group>
		</div>
	);
};
export default CreateAccordionItem;
