import styles from "./styles.module.css";
import Image from "next/image";

export default function SocialLinks() {
    return (
        <div className={styles.socialLinks__container}>
            <a href="https://github.com/NickBevers/" target="_blank" rel="noopener noreferrer">
                <Image
                    width={29}
                    height={27}
                    className={styles.socialLinks__icon}
                    src="/images/github.svg"
                    alt="Github"
                />
            </a>
            <a href="https://www.linkedin.com/in/nick-bevers-1642901b9/" target="_blank" rel="noopener noreferrer">
                <Image
                    width={29}
                    height={27}
                    className={styles.socialLinks__icon}
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                />
            </a>
            <a href="https://www.facebook.com/nick.bevers.9/" target="_blank" rel="noopener noreferrer">
                <Image
                    width={15}
                    height={27}
                    className={styles.socialLinks__icon}
                    src="/images/facebook.svg"
                    alt="Facebook"
                />
            </a>
        </div>
    );
}