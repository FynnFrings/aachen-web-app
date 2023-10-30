// A function that converts time to the "HH:MM" format
const formatTime = (time: string) => {
	// Extract the first two characters for hours and the remaining characters for minutes.
	const hours = time.slice(0, 2);
	const minutes = time.slice(2);

	// Combine the hours and minutes with a colon to format the time.
	return `${hours}:${minutes}`;
};

export default formatTime;
