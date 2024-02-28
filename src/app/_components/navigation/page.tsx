"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  // { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

function isActiveLink(href: string, pathName: string) {
  return href === pathName
    ? `${styles.navigation__link} ${styles.navigation__link_active}`
    : `${styles.navigation__link} `;
}

function getStyle(style: string = '') {
  switch (style) {
    case 'reverse':
      return styles.reverse;
    case 'transparent':
      return styles.transparent;
    case 'blurred':
      return styles.blurred;
    case 'reverse transparent' || 'transparent reverse':
      return `${styles.reverse} ${styles.transparent}`;
    default:
      return '';
  }
}

export default function Navigation({ style }: { style: string } = { style: '' }) {
  const pathName = usePathname();
  const router = useRouter();


  const toggleMenu = () => {
    const menu = document.querySelector(`.${styles.navigation}`);
    const links = document.querySelector(`.${styles.navigation__links}`);
    if (!menu || !links) return;
    menu.classList.toggle(`${styles.navigation_active}`);
    links.classList.toggle(`${styles.navigation__links_active}`);

    if (menu.classList.contains(`${styles.navigation_active}`)) {
      document.body.parentElement!.style.overflow = 'hidden';
    } else {
      document.body.parentElement!.style.overflow = 'auto';
    }
  }

  const toggleScroll = () => {
    const menu = document.querySelector(`.${styles.navigation}`);
    if (!menu) return;
    document.body.parentElement!.style.overflow = 'auto';
  }

  const handleRedirect = (href: string) => {
    toggleScroll();
    router.push(href);
  }


  return (
    <nav className={`${styles.navigation} ${getStyle(style)}`}>
      <div className={styles.navigation__contentContainer}>
        <Link href={'/'} className={`${styles.navigation__brand} ${style}`}>Nick Bevers</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentcolor" id="menuIcon" className={styles.navigation__mobileIcon} onClick={() => { toggleMenu() }} viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
        <div className={styles.navigation__links}>
          {links.map(({ href, label }) => (
            <Link
              key={`${href}${label}`}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleRedirect(href);
              }}
              className={`${isActiveLink(href, pathName)} ${style}`}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
