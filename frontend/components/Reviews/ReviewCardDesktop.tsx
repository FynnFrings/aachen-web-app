import ReviewCard from "./ReviewCard";

const ReviewCardDesktop = () => {
  return (
    <>
      <div className="w-full flex justify-around items-center  bg-[#383833]  rounded-2xl text-white py-14">
        <ReviewCard count="2000+" category="Nutzer*innen" />
        <ReviewCard count="65+" category="Unternehmen" />
        <ReviewCard count="4.9" category="Sterne" />
      </div>
    </>
  );
};

export default ReviewCardDesktop;
