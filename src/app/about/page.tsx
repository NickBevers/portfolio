import styles from "./styles.module.css";
import Developer from "./_components/developer/page";
import Mentor from "./_components/mentor/page";
import Experimenter from './_components/experimenter/page';

import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__intro}>
        <div className={styles.about__introContent}>
          <h1 className={styles.about__title}>
            Hey there, my <br className={`${styles.about__break} ${styles.break_first}`} />
            name is <span style={{ color: 'var(--blue--secondary)' }}>Nick</span>, developer<span className={styles.superScript}>(1)</span>, <br className={styles.about__break} />
            mentor<span className={styles.superScript}>(2)</span> and experimenter<span className={styles.superScript}>(3)</span>.
          </h1>

          <p className={styles.about__description}>I love to transform ideas into reality using a variety of technologies. Weaponed with knowledge, the internet and a ton of nerdy quirks, can I develop your project?</p>

          <Link href={"/contact"} className={styles.about__cta}>
            <p className={styles.about__cta__text}>Let&apos;s make this work!</p>
            <FaArrowRightLong className={styles.about__cta__icon} />
          </Link>
        </div>
      </div>

      <Developer />

      <Experimenter />

      <Mentor />
    </div>
  );
}