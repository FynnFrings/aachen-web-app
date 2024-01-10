import axios from "axios";

const getAllEvents = async () => {
	try {
		const response = await axios.get(
			"https://us-central1-aachen-app.cloudfunctions.net/getAllEvents",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				withCredentials: true,
			}
		);
		console.log("🚀 ~ file: getAllEvents.ts:8 ~ getAllEvents ~ response:", response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default getAllEvents;
