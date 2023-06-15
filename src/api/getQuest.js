import axios from "axios";

const getQuest = async () => {
	const response = await axios.get("https://opentdb.com/api.php?amount=5");

	const data = response.data.results;
	return data.map((q) => {
		return {
			question: q.question,
			answer: [
				{
					answer: q.correct_answer,
					isTrurue: true,
				},
				...q.incorrect_answers.map((a) => {
					return {
						answer: a,
						isTrue: false,
					};
				}),
			].sort(() => Math.random() - 0.5),
		};
	});
};
export default getQuest;
