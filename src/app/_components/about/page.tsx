import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./styles.module.css";

export default function aboutSection() {
  return (
    <section className={styles.about__container}>
      <h2 className={styles.about__title}>About</h2>
      <div className={styles.about__text}>
        <p className={styles.description}>
          I&apos;m a Belgian junior full-stack developer <br /> that
          likes to build your dream on the web.
        </p>

        <Link href={"/about"} className={styles.cta__container}>
          <p className={styles.cta__text}>Need to know more?</p>
          <FaArrowRightLong className={styles.cta__icon} />
        </Link>
      </div>
    </section>
  );
}
