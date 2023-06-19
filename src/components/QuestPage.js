// import Quest from "./Quest";
import { useState, useEffect } from "react";
import getQuest from "../api/getQuest";
// import { Link } from "react-router-dom";
const QuestPage = () => {
	const [questions, setQuestions] = useState([]);
	const [showAnswers, setShowAnswers] = useState(false);
	const [trueAnswer, setTrueAnswer] = useState(Array(3).fill(undefined));
	const [userAnswer, setUserAnswer] = useState(Array(3).fill(undefined));
	const [count, setCount] = useState(0);

console.log(questions);
console.log(showAnswers);
console.log(trueAnswer);
console.log(userAnswer);
console.log(count);

const playAgain = () => {
	// setQuestions([]); dont work
	setShowAnswers(false);
	setUserAnswer(Array(3).fill(undefined));
	setCount(0);
	

};

	useEffect(() => {
		const getQuestion = async () => {
			const response = await getQuest();
			setQuestions(response);
		};
		getQuestion();
	}, []);
	
	const checkAnswers = () => {
		if (userAnswer.every((answer) => answer === undefined)) {
			return setShowAnswers(false);
		} else {
			setShowAnswers(true);
		}
	};

	useEffect(() => {
		let score = 0;
		for (var i = 0; i < questions.length; i++) {
			if (userAnswer[i] === trueAnswer[i]) {
				score++;
			}
		}

		setCount(score);
	}, [checkAnswers]);

	useEffect(() => {
		setTrueAnswer(
			questions.map((quest) => {
				const answer = quest.answer.find((a) => {
					return a.isTrue;
				});
				return answer.answer;
			})
		);
	}, [questions]);

	const selectUserAnswer = (text, index) => {
		const newUserAnswer = [...userAnswer];
		newUserAnswer[index] = text;
		setUserAnswer(newUserAnswer);
	};

	const stylingButton = (indexQuestion, answer) => {
		if (showAnswers) {
			if (answer === trueAnswer[indexQuestion]) {
				return "answer-res green";
			} else if (answer === userAnswer[indexQuestion]) {
				return "answer-res red";
			} else {
				return "answer-res";
			}
		} else {
			return userAnswer[indexQuestion] === answer ? "answer" : "answer-res";
		}
	};



	return (
		<div className="wrapper">
			{questions.map((q, indexQuestion) => {
				return (
					<div className="section" key={indexQuestion}>
						<h2 className="question">{q.question}</h2>
						<div className="anwer-block">
							{q.answer.map((a, index) => {
								return (
									<button
										key={index}
										onClick={() => selectUserAnswer(a.answer, indexQuestion)}
										className={stylingButton(indexQuestion, a.answer)}>
										{a.answer}
									</button>
								);
							})}
						</div>
						<span></span>
					</div>
				);
			})}

			{showAnswers ? (
				<div className="new-game">
					<button onClick={() => playAgain()} className="g-but">
						New Quizzical
					</button>

					<span>Correct {count} answers</span>
				</div>
			) : (
				<button onClick={(index) => checkAnswers(index)} className="g-but">
					Check answers
				</button>
			)}
		</div>
	);
};
export default QuestPage;
