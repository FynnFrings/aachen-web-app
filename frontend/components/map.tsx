const EventMap = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const KEY = "AIzaSyAVaJhLqgWQgtXC4jjjHCHmspVsLIJHFaE";
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&lang=DE&zoom=17&style=invert_lightness:true&size=600x350&maptype=roadmap%20&markers=size:large%7Ccolor:0xFAC520%7C${latitude},${longitude}&style=feature:road|visibility:on&style=feature:poi.business|visibility:off&style=feature:poi.medical|visibility:off&key=${KEY}`;
  return (
    <div className="w-full">
      <img className="w-full rounded-3xl shadow-3xl" src={mapUrl} alt="map" />
    </div>
  );
};
export default EventMap;
