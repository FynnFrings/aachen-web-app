import { useRouter } from "next/router";
import { useEffect } from "react";

const Serviceportal = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("https://serviceportal.aachen.de");
  }, [router]);
  return (
    <>
      <div className="w-full h-96 flex justify-center items-center text-[#fac520] text-2xl">
        <h1>Sie werden jeden Moment weitergeleitet</h1>
      </div>
    </>
  );
};

export default Serviceportal;
