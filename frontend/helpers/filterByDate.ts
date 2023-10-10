// Function to filter items by title
const searchByDate = (state: string, a: any, b: any) => {
	return state === "vom neusten zu ältesten" // Sort from newest to oldest or vice versa based on selected sorting criteria
		? b.createdAt?._seconds - a.createdAt?._seconds || // If seconds are equal, sort by nanoseconds
				b.createdAt?._nanoseconds - a.createdAt?._nanoseconds
		: a.createdAt?._seconds - b.createdAt?._seconds || // If seconds are equal, sort by nanoseconds
				a.createdAt?._nanoseconds - b.createdAt?._nanoseconds;
};

export default searchByDate;
