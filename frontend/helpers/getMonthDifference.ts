// This function calculates the number of months between two dates.
const getMonthDifference = (startDate: any, endDate: any) => {
	// Create Date objects from the provided start and end date strings.
	const start = new Date(startDate);
	const end = new Date(endDate);

	// Extract the year component from the start and end dates.
	const startYear = start.getFullYear();
	const endYear = end.getFullYear();

	// Extract the month component from the start and end dates.
	const startMonth = start.getMonth();
	const endMonth = end.getMonth();

	// Calculate the difference in years between the start and end dates.
	const yearDiff = endYear - startYear;

	// Calculate the difference in months within the same year between the start and end dates.
	const monthDiff = endMonth - startMonth;

	// Calculate the total number of months by adding months within the same year to the years' contribution of months.
	const totalMonths = yearDiff * 12 + monthDiff;

	// Return the total number of months.
	return totalMonths;
};

export default getMonthDifference;
