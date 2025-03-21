'use client'
import styles from './styles.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";

const iconSize: { width: number, height: number } = { width: 22, height: 20 };
const facebookIconSize: { width: number, height: number } = { width: 11, height: 20 };

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  // { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const getCurrentYear = () => {
  return new Date().getFullYear();
}

function isActiveLink(href: string, pathName: string) {
  return href === pathName
    ? `${styles.footer__navigationItem} ${styles.footer__navigationItem_active}`
    : `${styles.footer__navigationItem} `;
}

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__content}>
        <div className={styles.footer__socials}>
          <p className={styles.footer__brand}>Nick Bevers</p>
          <div className={styles.footer__SocialContainer}>
            <div className={styles.footer__socialItem}>
              <a href="https://github.com/NickBevers/" className={styles.footer__socialIcon} target="_blank" rel="noopener noreferrer">
                <Image
                  width={iconSize.width}
                  height={iconSize.height}
                  src="/images/github.svg"
                  alt="Github"
                />
              </a>
              <a className={styles.footer__socialTitle} target='_blank' rel='noopener noreferrer' href={'https://github.com/NickBevers/'}>Github</a>
            </div>

            <div className={styles.footer__socialItem}>
              <a href="https://www.linkedin.com/in/nick-bevers-1642901b9/" className={styles.footer__socialIcon} target="_blank" rel="noopener noreferrer">
                <Image
                  width={iconSize.width}
                  height={iconSize.height}
                  className={styles.footer__socialIcon}
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
              <a className={styles.footer__socialTitle} target='_blank' rel='noopener noreferrer' href={'https://www.linkedin.com/in/nick-bevers-1642901b9/'}>LinkedIn</a>
            </div>

            <div className={styles.footer__socialItem}>
              <a href="https://www.facebook.com/nick.bevers.9/" className={styles.footer__socialIcon} target="_blank" rel="noopener noreferrer">
                <Image
                  width={facebookIconSize.width}
                  height={facebookIconSize.height}
                  className={styles.footer__socialIcon}
                  src="/images/facebook.svg"
                  alt="Facebook"
                />
              </a>
              <a className={`${styles.footer__socialTitle} ${styles.socialFacebook}`} target='_blank' rel='noopener noreferrer' href={'https://www.facebook.com/nick.bevers.9/'}>Facebook</a>
            </div>
          </div>
        </div>

        <div className={styles.footer__navigation}>
          <p className={`${styles.footer__title} ${styles.footer__navigationTitle}`}>Navigation</p>
          <div className={styles.footer__navigationLinks}>
            {links.map(({ href, label }) => (
              <Link
                key={`${href}.${label}`}
                href={href}
                className={`${isActiveLink(href, pathName)}`}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.footer__contact}>
          <p className={styles.footer__title}>Contact me</p>
          <div className={styles.footer__contactFields}>
            <p className={styles.footer__contactData}>Email. <br className={styles.footer__mobileBreak} /><span className={styles.footer__contactField}>hello@nickbevers.dev</span></p>
            <p className={styles.footer__contactData}>Tel. <br className={styles.footer__mobileBreak} /><span className={styles.footer__contactField}>+32 456 82 94 05</span></p>
            <p className={styles.footer__contactData}>VAT. <br className={styles.footer__mobileBreak} /><span className={styles.footer__contactField}>BE1019.819.891</span></p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.copyright}>
        <p>&copy;{getCurrentYear()} nickbevers.dev | All Rights Reserved</p>
      </div>
    </footer>
  );
}