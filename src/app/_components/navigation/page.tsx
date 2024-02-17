"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";

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
    default:
      return '';
  }
}

const toggleMenu = () => {
  const menu = document.querySelector(`.${styles.navigation}`);
  const links = document.querySelector(`.${styles.navigation__links}`);
  if (!menu || !links) return;
  menu.classList.toggle(`${styles.navigation_active}`);
  links.classList.toggle(`${styles.navigation__links_active}`);
}

export default function Navigation({ style }: { style: string } = { style: '' }) {
  const pathName = usePathname();

  return (
    <nav className={`${styles.navigation} ${getStyle(style)}`}>
      <div className={styles.navigation__contentContainer}>
        <Link href={'/'} className={`${styles.navigation__brand} ${style}`}>Nick Bevers</Link>
        <MdMenu id="menuIcon" className={styles.navigation__mobileIcon} onClick={() => { toggleMenu() }} />
        <div className={styles.navigation__links}>
          {links.map(({ href, label }) => (
            <Link
              key={`${href}${label}`}
              href={href}
              className={`${isActiveLink(href, pathName)} ${style}`}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
