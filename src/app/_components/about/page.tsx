import Link from "next/link";
import styles from "./styles.module.css";

export default function aboutSection() {
  return (
    <section className={styles.about__container}>
      <h2 className={styles.about__title}>About</h2>
      <div className={styles.about__text}>
        <p className={styles.about__description}>
          I&apos;m a Belgian junior full-stack developer <br /> who
          likes to build your dream on the web.
        </p>

        <Link href={"/about"} className={styles.cta__container}>
          <p className={styles.cta__text}>Need to know more?</p>
          {/* <FaArrowRightLong className={styles.cta__icon} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.cta__icon} width="32" height="32" fill="currentcolor" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
        </Link>
      </div>
    </section>
  );
}
