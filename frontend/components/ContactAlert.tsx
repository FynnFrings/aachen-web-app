const ContactAlert = ({ alertMessage }: { alertMessage: string }) => {
  return (
    <>
      <div className="fixed z-10  left-[50%] -translate-x-[50%] w-[50%] lg:w-[25%] h-[7%] rounded-lg bg-[#fac520] animate-popup flex items-center">
        <h2 className="text-lg text-[#222] pl-2">{alertMessage}</h2>
        <div className="fixed h-2 bottom-0 bg-[#f8e5af] animate-fill rounded-b-lg"></div>
      </div>
    </>
  );
};

export default ContactAlert;
