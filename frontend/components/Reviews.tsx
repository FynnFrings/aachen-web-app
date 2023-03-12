import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-y-14 text-white text-center py-20 px-12">
        <ReviewCard count="2000+" category="Nutzer*innen" />
        <ReviewCard count="65+" category="Unternehmen" />
        <ReviewCard count="4.9" category="Sterne" />
      </div>
    </>
  );
};

export default Reviews;
