import { Link } from "react-router-dom";

const GratingPage = () => {
	return (
		<div className="wrapper">
			<div className="grating">
				<div className="g-info">
					<h1 className="title">Quizzical</h1>
					<h3 className="sub-title">Some description if needed</h3>
					<Link className="g-but" to="/QuestPage">
						Start quiz
					</Link>
				</div>
			</div>
		</div>
	);
};
export default GratingPage;
