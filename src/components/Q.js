
// import{useState,useEffect} from "react";


// const Quest = ({q }) => {
// 	const [choosen, setChoosen] = useState([]);
	
// 		const chooseAnswer = (answer) => {
// 		setChoosen([...choosen, answer]);
	
// 		const chooseIsTrue= () => {
// 			if (choosen[0].isTrue===undefined){
// 				return
// 			}
// 			if (choosen[0].isTrue === true) {
// 				return "green"
// 			}else if(choosen[0].isTrue === false){
// 				return "red"
// 			}else {
// 				return "answer"
// 			}
// 		}
		
// 	}


// 	console.log(choosen[0].isTrue	);

// 	return (
// 		<div className="section" >
// 			<h2 className="question">{q.question}</h2>
// 			<div className="anwer-block">
// 				{q.answer.map((a) => {
// 					return <button onClick={() => chooseAnswer(a)} className="answer" key={a.id} >{a.answer}</button>;
// 				})}
// 			</div> 
// 			<span></span>
// 		</div>
// 	);
// };

// export default Quest;
