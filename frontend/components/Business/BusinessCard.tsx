import styles from "@/styles/business_card.module.scss";
import Image from "next/image";
import MockupImage from "@/public/AachenPics/aachen6.png";
import MockupImage2 from "@/public/aachen_pic_2.png";
const BusinessCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.business_image_container}>
        <Image
          className={styles.business_image}
          src={MockupImage}
          alt="business_image"
          width={0}
          height={0}
        />
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
      <div className={styles.info_container}>
        <div className={styles.business_name}>Weltweit am Dom</div>
        <div className={styles.business_category}>Einzelhandel</div>
        <div className={styles.business_time}>Öffnet um 9 Uhr</div>
        <button className={styles.business_button}>Button</button>
      </div>
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
    </div>
  );
};

export default BusinessCard;
