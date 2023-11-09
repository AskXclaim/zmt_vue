import axios from "axios";

const apiUrl = "https://opentdb.com/api.php";
export const getQuestionAndAnswers = async () => {
	// const call = "?amount=1";
	try {
		const response = await axios.get(apiUrl, {
			params: {
				amount: 1
			}
		});
		// console.log(response);
		if (response.data.response_code !== 0)
			throw new Error("Invalid response code while trying to get question");

		const data = response.data;
		const results = data.results[0];

		if (results.length === 0)
			throw new Error("Invalid response while trying to get question");

		const question = results.question;
		const correctAnswer = results.correct_answer;
		const incorrectAnswers = results.incorrect_answers;

		return {
			question: question,
			correctAnswer: correctAnswer,
			incorrectAnswers: incorrectAnswers,
		};

	} catch (error) {
		console.log(error);
	}

}