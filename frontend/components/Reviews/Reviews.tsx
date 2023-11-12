import ReviewCard from "./ReviewCard";
import ReviewCardDesktop from "./ReviewCardDesktop";

const Reviews = () => {
	return (
		<>
			<div className="w-full flex flex-col items-center gap-y-14 text-white text-center py-20 px-12 lg:hidden">
				<ReviewCard count="2000+" category="Nutzer*innen" />
				<ReviewCard count="65+" category="Unternehmen" />
				<ReviewCard count="4.9" category="Sterne" />
			</div>
			<div className="hidden lg:block">
				<ReviewCardDesktop />
			</div>
		</>
	);
};

export default Reviews;
