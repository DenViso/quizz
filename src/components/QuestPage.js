// import Quest from "./Quest";
import { useState } from "react";
// import { Link } from "react-router-dom";
const QuestPage = ({ questions, setQuestions}) => {
	
	
	const [showAnswers, setShowAnswers] = useState(false)
	

const playAgain = () =>	{
			setShowAnswers(false)
	
	}

	const checkAnswers=()=>{
		setShowAnswers(true)
	}

const selectAnswer =(quest_id,option_id) =>
{
	return	setQuestions((prev)=> {
				return(questions.map((quest) => {
						if(quest_id){
								return({...quest, selected_answer:option_id})
						}else{
								return(quest)
						}
						
				}))
		})
}


console.log(showAnswers);








	

	return (
		<div className="wrapper">
			{questions.map((q, index) => {
				return (
					<div className="section" key={index}>
						<h2 className="question">{q.question}</h2>
						<div className="anwer-block">
						
							{q.answer.map((a, index) => {
								return (
									<button
										key={index}
										onClick={() => selectAnswer()}
										className="answer"
										// className={a.isTrue === true ? "answer green" : "answer red"}
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
			<button onClick={() => checkAnswers()} className="g-but">Check answers</button>
			<button onClick={() => playAgain()} className="g-but">
				New Quizzical
			</button>
		</div>
	);
};
export default QuestPage;
// return <Quest key={q.id} q={q} />;
