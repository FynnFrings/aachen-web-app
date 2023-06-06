import { useRouter } from "next/router";
import { useEffect } from "react";

const Sticker = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/download");
  }, [router]);
  return <></>;
};

export default Sticker;
