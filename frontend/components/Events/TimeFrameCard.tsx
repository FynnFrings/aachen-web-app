import styles from "@/styles/event_time_frame.module.scss";
import { dateFormat } from "@/helpers/dateFormat";

// Define the EventCard component
const TimeFrameCard = ({ eventFrame }: any) => {
	return (
		// Wrap the entire card in a link, which will redirect to event details page
		<div className="animate-fade">
			<div className={styles.container}>
				{/* Render the event name, category, opening hours, and "Mehr anzeigen" button */}
				<div className={styles.info}>
					{eventFrame.title && <div className={styles.event_name}>{eventFrame.title}</div>}
					{eventFrame.startDate && eventFrame.endDate && (
						<div className={styles.event_time}>
							<p>{dateFormat(eventFrame.startDate)}</p> — <p>{dateFormat(eventFrame.endDate)}</p>
						</div>
					)}
					<div className={styles.event_location}>{eventFrame.location}</div>
				</div>
			</div>
		</div>
	);
};

export default TimeFrameCard;
