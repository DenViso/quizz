import { BrowserRouter, Routes, Route } from "react-router-dom";

import GratingPage from "./components/GratingPage";
import QuestPage from "./components/QuestPage";

function App() {


		


	return (
		<div className="App">
			<img className="bg-top" src="./imagis/top.png" alt="bg" />
			<img className="bg-bottom" src="./imagis/bottom.png" alt="bg" />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<GratingPage />} />
					<Route path="/QuestPage" element={<QuestPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
