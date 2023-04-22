import Image from "next/image";
import Aachen2 from "../public/AachenPics/aachen2.jpg";
import Aachen3 from "../public/AachenPics/aachen3.jpg";
import Aachen4 from "../public/AachenPics/aachen4.jpg";
import Aachen5 from "../public/AachenPics/aachen5.jpg";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      src: Aachen2,
    },
    {
      id: 2,
      src: Aachen3,
    },
    {
      id: 3,
      src: Aachen4,
    },
    {
      id: 4,
      src: Aachen5,
    },
  ];
  return (
    <>
      <div className="py-20 w-full hidden lg:block">
        <div className="text-white text-center mb-14">
          <h2 className="font-bold text-5xl">Gallery</h2>
        </div>
        <div className="w-full">
          <ul className="w-full flex justify-around gap-x-6">
            {photos.map((photo) => (
              <li key={photo.id}>
                <Image src={photo.src} alt="aachen" width={346} height={519} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Gallery;
