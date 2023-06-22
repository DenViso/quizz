import { Link } from "react-router-dom";
import getCategory from "../api/getCategory";
import { useState, useEffect } from "react";



const GratingPage = () => {
	const [category, setCategory] = useState([]);
	const [chooseCat, setChooseCat] = useState(9);

	const getByCategory = async () => {
		const response = await getCategory();
		setCategory(response);
	};
	useEffect(() => {
		getByCategory();
	}, []);

	const categoryChoosen = (e) => {
		setChooseCat(e);
	};
	
	console.log(chooseCat);

	return (
		<div className="wrapper">
			<div className="grating">
				<div className="g-info">
					<h1 className="title">Quizzical</h1>
					<h3 className="sub-title">Some description if needed</h3>
					<Link className="g-but" to="/QuestPage">
						Start quiz
					</Link>

					<div className="category-box">
						<h2>Choose category</h2>
						<div className="cat">
							{category.map((cat) => {
								return (
									<button
										className="g-but-cat"
										key={cat.id}
										onClick={() => categoryChoosen(cat.id)}>
										{cat.name}
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<p className="created">
				Created by <b>itdeniro00@gmail.com</b>
			</p>
		</div>
	);
};
export var chooseCat = chooseCat;
 console.log(chooseCat);
export default GratingPage;
