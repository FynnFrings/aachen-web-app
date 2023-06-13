import styles from "@/styles/business_card.module.scss";
import Image from "next/image";
import MockupImage from "@/public/AachenPics/aachen6.png";
import MockupImage2 from "@/public/aachen_pic_2.png";
import Link from "next/link";

// Return JSX to render the business card
const BusinessCard = () => {
  return (
    //Wrap an entire card in a link, which will redirect to business details page
    <Link className={styles.container} href={""}>
      {/* Render a placeholder image */}
      <div className={styles.business_image_container}>
        <Image
          className={styles.business_image}
          src={MockupImage}
          alt="business_image"
          width={0}
          height={0}
        />
        {/* Render a placeholder logo */}
        <div className={styles.business_logo_container}>
          <Image
            className={styles.business_logo}
            src={MockupImage2}
            alt="business_image"
            width={0}
            height={0}
          />
        </div>
      </div>
      {/* Render the name, category, opening hours, button */}
      <div className={styles.info_container}>
        <div className={styles.info}>
          <div className={styles.business_name}>Weltweit am Dom</div>
          <div className={styles.business_category}>Einzelhandel</div>
          <div className={styles.business_time}>Öffnet um 9 Uhr</div>
        </div>
        <button className={styles.business_button}>Merken</button>
      </div>
      {/* Render the additional information about distance and number of posts */}
      <div className={styles.add_info}>
        <div className={styles.distance}>
          <p className={styles.number}>39</p> <br />{" "}
          <p className={styles.text}>von Dom</p>
        </div>
        <div className={styles.posts}>
          <p className={styles.number}>0</p> <br />{" "}
          <p className={styles.text}>Beiträge</p>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
