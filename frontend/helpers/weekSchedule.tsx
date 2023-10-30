import formatTime from "./formatTime";

const weekSchedule = (scheduleData: any) => {
	const daysOfWeekGerman = [
		"Montag",
		"Dienstag",
		"Mittwoch",
		"Donnerstag",
		"Freitag",
		"Samstag",
		"Sonntag",
	];

	// Render a list of days of the week and opening & closing times
	const scheduleItems = daysOfWeekGerman.map((dayOfWeek, index) => {
		const scheduleItem = scheduleData.find((item: any) => item.open.day === index);
		if (scheduleItem) {
			const openTime = formatTime(scheduleItem.open.time);
			const closeTime = formatTime(scheduleItem.close.time);
			return (
				<p key={index}>
					{dayOfWeek}:{" "}
					<span>
						{openTime.length && closeTime.length == 5
							? `${openTime} - ${closeTime} Uhr`
							: "Geschlossen"}
					</span>
				</p>
			);
		} else {
			return (
				<p key={index}>
					{dayOfWeek}: <span>Geschlossen</span>
				</p>
			);
		}
	});
	return scheduleItems;
};

export default weekSchedule;
