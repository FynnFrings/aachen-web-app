import { IBusinessCard } from "@/types/types";
// const mapStyle = "height: 25rem, border: 0, border-radius: 0.75rem,";
const InteractiveMap = ({
	location,
	latitude,
	longitude,
}: {
	location?: string;
	latitude: number;
	longitude: number;
}) => {
	const KEY = `AIzaSyAVaJhLqgWQgtXC4jjjHCHmspVsLIJHFaE`;
	const PARAMETERS = `q=${location}&center=${latitude},${longitude}&language=DE&zoom=17&maptype=roadmap`;
	const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${KEY}&${PARAMETERS}`;
	return (
		<iframe
			referrerPolicy="no-referrer-when-downgrade"
			src={mapUrl}
			allowFullScreen
		/>
	);
};

export default InteractiveMap;
