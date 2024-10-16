import { useState } from "react";
import {
	setAddTravelPlan,
	setAddMustHaveItems,
	setBugdetAndCosts,
	setPhotosAndMemories,
} from "../../store/journeySlice";
import { useDispatch } from "react-redux";
import { Form, InputGroup, Button } from "react-bootstrap";

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

	const handleCreateAccordionItemToCorrectContainer = (field: string) => {
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

	return (
		<div>
			<Form.Group>
				<InputGroup>
					<Form.Control
						placeholder={placeholder}
						value={inputAccordionValue}
						onChange={e => setInputAccordionValue(e.target.value)}
					/>
					<Button onClick={() => handleCreateAccordionItemToCorrectContainer(placeholder)}>Add</Button>
				</InputGroup>
				<Form.Text>
					{accordionListValue.map((item, index) => (
						<div className='create-accordion-item__created-item' key={index}>
							{item}
						</div>
					))}
				</Form.Text>
			</Form.Group>
		</div>
	);
};
export default CreateAccordionItem;
