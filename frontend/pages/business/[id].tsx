import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/business_details.module.scss";
import EventMap from "../../components/map";
import { MouseEventHandler, useState } from "react";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";

const BusinessDetailsPage = ({ companies  }: any) => {
  const [alert, isAlert] = useState<boolean>(false);

  // console.log(companies);

  // onClick function with setTimeout fuction to manage "alert" state
  const handleSubmit: MouseEventHandler = () => {
    isAlert(true);
    setTimeout(() => {
      isAlert(false);
    }, 3000);
  };

  const center: [number, number] = [51.505, -0.09];
  return (
    <>
      <div className={styles.business_header}>
        <div className={styles.background}>
          <Image
            src={"/business_logo.png"}
            width="0"
            height="0"
            sizes="(max-width: 200px)"
            alt="Business logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.title}>
          <h1>Weltweit am Dom</h1>
          <p>
            Einzelhandel{" "}
            <span className={styles.opening_time}>Öffnet 9 Uhr</span>
          </p>
          <p className={styles.description}>
            Fairtrade Artikel, Geschenkideen und Kindsthandwerk aus aller Welt.
            Ehrenamtlich geführt!
          </p>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleSubmit} className={styles.notification}>
            <Image
              alt="notification icon"
              src={"/notification_icon.svg"}
              height={"24"}
              width={"24"}
            />
            Merken
          </button>
          {alert ? <BusinessMerkenResponseMessage /> : ""}
          <Link href={"/kontaktiren"}>
            <button className={styles.contact}>Kontaktieren</button>
          </Link>
        </div>
      </div>
      <div className={styles.business_details}>
        <div className={styles.information}>
          <h2>Information</h2>
          <p>
            <Image alt="" height={"28"} width={"28"} src={"/building.svg"} />{" "}
            Weltweit am Dom
          </p>
          <p>
            <Image alt="" height={"28"} width={"28"} src={"/graph.svg"} />{" "}
            Einzelhandel
          </p>
          <p>
            <Image alt="" height={"28"} width={"28"} src={"/shop-remove.svg"} />{" "}
            seit 24 Monaten Mitglied der Aachen App
          </p>
          <p>
            <Image alt="" height={"28"} width={"28"} src={"/ticket-star.svg"} />{" "}
            Noch keine Coupons erstellt
          </p>
          <p>
            <Image alt="" height={"28"} width={"28"} src={"/calendar.svg"} />{" "}
            Noch keine Events erstellt
          </p>
        </div>
        <div className={styles.opening_time_table}>
          <h2>Öffnungszeiten</h2>
          <p>
            Montag:<span>Unbekannt</span>
          </p>
          <p>
            Dienstag:<span>Unbekannt</span>
          </p>
          <p>
            Mittwoch:<span>Unbekannt</span>
          </p>
          <p>
            Donnerstag:<span>Unbekannt</span>
          </p>
          <p>
            Freitag:<span>Unbekannt</span>
          </p>
          <p>
            Samstag:<span>Unbekannt</span>
          </p>
          <p>
            Sonntag:<span>Unbekannt</span>
          </p>
        </div>
        <div className={styles.location}>
          <h2>Standort</h2>
          {/* <iframe
            className={styles.map}
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAVaJhLqgWQgtXC4jjjHCHmspVsLIJHFaE
    &q=Weltweit+am+Dom,Aachen+Germany&zoom=18"
          /> */}
          <EventMap
            latitude={50.774688851658695}
            longitude={6.083457278391105}
          />
          <Link
            href={`https://maps.google.com/?q=${50.774688851658695},${6.083457278391105}`}
          >
            <button>Route planen</button>
          </Link>
        </div>
        <div className={styles.website_link}>
          <Image
            src={"/business_logo.png"}
            width="56"
            height="56"
            alt="Business logo"
            className={styles.logo}
          />
          <span>
            <h2>Website</h2>
            <a
              target="_blank"
              href="https://www.bistum-aachen.de/Weltkirche-im-Bistum-Aachen/Weltweit-am-Dom/"
              rel="noreferrer"
            >
              https://www.bistum-aachen.de/Weltkirche-im-Bistum-Aachen/Weltweit-am-Dom/
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from  API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { companies: data } };
}

export default BusinessDetailsPage;
