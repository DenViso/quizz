// import Quest from "./Quest";
import {useState} from "react";
const QuestPage = ({ questions }) => {
	const [choosen, setChoosen] = useState([]);

	const chooseAnswer = (answer) => {
		setChoosen([...choosen, answer]);
	};


	// const chooseIsTrue = () => {
	// 	if (choosen[0].length === undefined) {
	// 		return choosen[0].isTrue;
	// 	}
	// 	if (choosen[0].isTrue === true) {
	// 		return "green";
	// 	} else if (choosen[0].isTrue === false) {
	// 		return "red";
	// 	} else {
	// 		return "answer";
	// 	}
	// };
	


	console.log(choosen[i].isTrue);
	console.log(choosen);
	return (
		<div className="wrapper">
		
				{questions.map((q) => {
					return(
					<div className="section">
						<h2 className="question">{q.question}</h2>
						<div className="anwer-block">
							{q.answer.map((a) => {
								return (
									<button
										onClick={() => chooseAnswer(a)}
										className="answer"
										key={a.id}>
										{a.answer}
									</button>
								);
							})}
						</div>
						<span></span>
					</div>
					);
				 })} 
			
			<button onClick={()=>console.log("1")} className="g-but">
				Check answers
			</button>
		</div>
	);
};
export default QuestPage;
// return <Quest key={q.id} q={q} />;
