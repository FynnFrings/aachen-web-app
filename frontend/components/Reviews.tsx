const Reviews = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-y-14 text-white text-center py-20 px-12">
        <div className="w-full py-8 bg-[#383833]  rounded-2xl">
          <p className="text-4xl text-[#FAC520] font-medium">2000+</p>
          <p className="text-2xl font-normal">Nutzer*innen</p>
        </div>
        <div className="w-full py-8 bg-[#383833] rounded-2xl">
          <p className="text-4xl text-[#FAC520] font-medium">65+</p>
          <p className="text-2xl font-normal">Unternehmen</p>
        </div>
        <div className="w-full py-8 bg-[#383833] rounded-2xl">
          <p className="text-4xl text-[#FAC520] font-medium">4.9</p>
          <p className="text-2xl font-normal">Sterne</p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
