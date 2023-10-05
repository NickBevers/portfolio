"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

// const reverseLinks = ["/", "/skills", "/contact"];

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
        default:
            return '';
    }
}

export default function Navigation({ style }: { style?: string} = { style: ''}) {
    const pathName = usePathname();

    return (
        <nav className={`${styles.navigation} ${getStyle(style)}`}>
            <div className={styles.navigation__contentContainer}>
                <p className={`${styles.navigation__brand} ${style}`}>Nick Bevers</p>
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
