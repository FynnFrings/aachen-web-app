import { IBusinessCard } from "@/types/types";

const InteractiveMap = ({ business }: { business: IBusinessCard }) => {
	const KEY = `AIzaSyAVaJhLqgWQgtXC4jjjHCHmspVsLIJHFaE`;
	const PARAMETERS = `q=${business.location}&center=${business.latitude},${business.longitude}&language=DE&zoom=17&maptype=roadmap`;
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
