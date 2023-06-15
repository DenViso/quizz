import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import getQuest from "./api/getQuest";
import GratingPage from "./components/GratingPage";
import QuestPage from "./components/QuestPage";

function App() {
	const [questions, setQuestions] = useState([]);
	
	

	useEffect(() => {
		const getQuestion = async () => {
			const response = await getQuest();
			setQuestions(response);
		};
		getQuestion();
	},[]);




	
	return (
		<div className="App">
			<img className="bg-top" src="./imagis/top.png" alt="bg" />
			<img className="bg-bottom" src="./imagis/bottom.png" alt="bg" />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<GratingPage />} />
					<Route
						path="/QuestPage"
						element={<QuestPage questions={questions} key={questions.id} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
