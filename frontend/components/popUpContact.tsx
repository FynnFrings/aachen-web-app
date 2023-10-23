import { CgCloseR } from "react-icons/cg";
import styles from "../styles/popUpContact.module.scss";
import Link from "next/link";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
const PopUpContact = ({ open, popUpOpener, businessContacts }: any) => {
	return (
		<div className={styles.popup_container_open}>
			<div className={styles.popup_header}>
				<h2>Contact</h2>
				<button onClick={popUpOpener}>
					<CgCloseR className={styles.close_button} />
				</button>
			</div>
			{businessContacts.instagram != null ? (
				<div className={styles.contacts_item}>
					<AiFillInstagram size={30} color="#fac520" />
					<Link
						target="_blank"
						rel="noreferrer"
						href={`https://www.instagram.com/${businessContacts.instagram.replace(
							/\s/g,
							""
						)}/`}
					>
						@{businessContacts.instagram}
					</Link>
				</div>
			) : (
				""
			)}
			{businessContacts.email != null ? (
				<div className={styles.contacts_item}>
					<MdEmail size={30} color="#fac520" />
					<Link href={`mailto:${businessContacts.email}`}>
						{businessContacts.email}
					</Link>
				</div>
			) : (
				""
			)}
			{businessContacts.telegram != null ? (
				<div className={styles.contacts_item}>
					<BsTelegram size={30} color="#fac520" />
					<Link
						target="_blank"
						rel="noreferrer"
						href={`https://t.me/${businessContacts.telegram}`}
					>
						{businessContacts.telegram}
					</Link>
				</div>
			) : (
				""
			)}
			{businessContacts.whatsapp != null ? (
				<div className={styles.contacts_item}>
					<IoLogoWhatsapp size={30} color="#fac520 " />
					<Link
						target="_blank"
						rel="noreferrer"
						href={`https://wa.me/${businessContacts.whatsapp}`}
					>
						{businessContacts.whatsapp}
					</Link>
				</div>
			) : (
				""
			)}
			{businessContacts.number != null ? (
				<div className={styles.contacts_item}>
					<AiFillPhone size={30} color="#fac520 " />
					{businessContacts.number}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default PopUpContact;
