import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';
import GratingPage from "./components/GratingPage";
import QuestPage from "./components/QuestPage";

function App() {
	const [chooseCat, setChooseCat] = useState(9);

	const categoryChoosen = (e) => {
		setChooseCat(e);
	};
	
	return (
		<div className="App">
			<img className="bg-top" src="./imagis/top.png" alt="bg" />
			<img className="bg-bottom" src="./imagis/bottom.png" alt="bg" />
			<BrowserRouter>
				<Routes>

					<Route path="/" element={<GratingPage  chooseCat={chooseCat} categoryChoosen = {categoryChoosen}/>} />

					<Route path="/QuestPage" element={<QuestPage chooseCat={chooseCat} />} />
				
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
