import styles from './styles.module.css'
import Link from 'next/link';
import Image from 'next/image';

const iconSize: {width: number, height: number} = {width: 22, height: 20};
const facebookIconSize: {width: number, height: number} = {width: 11, height: 20};

const getCurrentYear = () => {
    return new Date().getFullYear();
}

export default function Footer() {
    return(
        <footer className={styles.footer__container}>
            <div className={styles.footer__content}>
                <p className={styles.footer__brand}>Nick Bevers</p>

                <div className={styles.footer__navigation}>
                    <p className={styles.footer__title}>Navigation</p>
                    <div className={styles.footer__navigationLinks}>
                        <Link className={styles.footer__navigationItem} href={'/'}>Home</Link>
                        <Link className={styles.footer__navigationItem} href={'/projects'}>Projects</Link>
                        <Link className={styles.footer__navigationItem} href={'/about'}>About</Link>
                        <Link className={styles.footer__navigationItem} href={'/skills'}>Skills</Link>
                        <Link className={styles.footer__navigationItem} href={'/contact'}>Contact</Link>
                    </div>
                </div>

                <div className={styles.footer__contact}>
                    <p className={styles.footer__title}>Contact us</p>
                    <div className={styles.footer__contactFields}>
                        <p>Email.<span className={styles.white}>hello@nickbevers.be</span></p>
                        <p>Tel.<span className={styles.white}>+32 477 35 55 32</span></p>
                    </div>
                </div>

                <div className={styles.footer__socials}>
                    <p className={styles.footer__title}>Socials</p>

                    <div className={styles.footer__SocialContainer}>
                        <div className={styles.footer__socialItems}>
                            <Link href="https://github.com/NickBevers/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    width={iconSize.width}
                                    height={iconSize.height}
                                    className={styles.socialLinks__icon}
                                    src="/images/github.svg"
                                    alt="Github"
                                />
                            </Link>

                            <Link href="https://www.linkedin.com/in/nick-bevers-1642901b9/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    width={iconSize.width}
                                    height={iconSize.height}
                                    className={styles.socialLinks__icon}
                                    src="/images/linkedin.svg"
                                    alt="LinkedIn"
                                />
                            </Link>
                            
                            <Link href="https://www.facebook.com/nick.bevers.9/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    width={facebookIconSize.width}
                                    height={facebookIconSize.height}
                                    className={styles.socialLinks__icon}
                                    src="/images/facebook.svg"
                                    alt="Facebook"
                                />
                            </Link>
                        </div>

                        <div className={styles.footer__socialText}>
                            <p className={styles.footer__socialTitle}>Github</p>
                            <p className={styles.footer__socialTitle}>LinkedIn</p>
                            <p className={styles.footer__socialTitle}>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className={styles.divider}/>

            <div className={styles.copyright}>
                <p>&copy;{getCurrentYear()} nickbevers.be | All Rights Reserved</p>
            </div>
        </footer>
    );
}