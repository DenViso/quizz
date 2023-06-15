// import Quest from "./Quest";
import {useState} from "react";
import {Link} from "react-router-dom";
const QuestPage = ({ questions }) => {
	const [choosen, setChoosen] = useState([]);
	const [correct, setCorrect] = useState(0);

	const chooseAnswer = (answer) => {
		if (answer) {
			setChoosen([...choosen, answer]);
		}
		 if(questions.map(q => q.answer.map(a => a.isTrue))===choosen){
							 
		 }

	};
	


	console.log(choosen);////this
	// console.log(answer);
	console.log(correct);
	console.log(questions.map(q => q.answer));
	console.log(questions.map(q => q.answer.map(a => a.isTrue)));
	// console.log(questions[0].answer);
	
	

	
	



	return (
		<div className="wrapper">
		
				{questions.map((q, index) => {
					return(
					<div className="section" key ={index}>
						<h2 className="question">{q.question}</h2>
						<div className="anwer-block">
							{q.answer.map((a,index) => {
								return (
									<button key ={index}
										onClick={() => chooseAnswer(a)}
										className="answer "
										>
										{a.answer}
									</button>
								);
							})}
						</div>
						<span></span>
					</div>
					);
				 })} 
			<button   className="g-but">
				Check answers
			</button>
			<Link to="/" className="g-but">New Quizzical</Link>
			
		</div>
	);
};
export default QuestPage;
// return <Quest key={q.id} q={q} />;
