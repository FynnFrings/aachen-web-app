const ReviewCardDesktop = () => {
  return (
    <>
      <div className="w-full flex justify-around items-center  bg-[#383833]  rounded-2xl text-white py-14">
        <div className="flex flex-col gap-y-4">
          <p className="text-4xl text-[#FAC520] font-medium">2500+</p>
          <p className="text-2xl font-normal">Nutzer*innen</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-4xl text-[#FAC520] font-medium">65%</p>
          <p className="text-2xl font-normal">Unternehmen</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-4xl text-[#FAC520] font-medium">100%</p>
          <p className="text-2xl font-normal">Konstenlos</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-4xl text-[#FAC520] font-medium">5.0</p>
          <p className="text-2xl font-normal">Sterne</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCardDesktop;
