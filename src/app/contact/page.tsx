import styles from "./styles.module.css";
import SocialLinks from "../_components/socialLinks/page";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className={styles.contact__container}>
            <div className={styles.contact__textContent}>
                <h1 className={styles.contact__title}>
                    You made <br className={styles.break_mobile}/>it to <br />
                    <span className="attention">this page</span>
                </h1>
                <p className={styles.contact__text}>
                    That must mean you enjoyed your adventure on this website. Want
                    to discuss your projects and start building on something big
                    <span className={styles.contact__textSmall}>{" "}(or small)</span>?
                    Great, you can{" "}
                    <Link
                        className={styles.contact__link}
                        href="mailto:nick.bevers9@gmail.com"
                    >
                        click here
                    </Link>{" "}
                    to send me an e-mail.
                </p>
            </div>

            <div className={styles.socials__container}>
                <p className={styles.socials__text}>
                    In the meantime, <span className={styles.socials__mobile}>you might want to</span> check out my socials.
                </p>
                <SocialLinks />
            </div>
        </div>
    );
}
