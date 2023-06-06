import { useRouter } from "next/router";
import { useEffect } from "react";

const Poster = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/download");
  }, [router]);
  return <></>;
};

export default Poster;
