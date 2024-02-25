import styles from "./styles.module.css";
import Developer from "./_components/developer/page";
import Mentor from "./_components/mentor/page";
import Experimenter from './_components/experimenter/page';

import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__intro}>
        <div className={styles.about__introContent}>
          <div className={styles.about__introImageContainer}>
            <Image src="/images/nick.jpg" width={450} height={450} alt="Nick" className={styles.about__introImage} />
          </div>
          <div>
            <h1 className={styles.about__title}>
              Hey there,<br className={`${styles.about__break} ${styles.break_first}`} />  my name is <span style={{ color: 'var(--blue--secondary)' }}>Nick</span>
            </h1>
            <p className={styles.about__description}>I love to transform ideas into reality using a variety of technologies. Weaponed with knowledge, the internet and a ton of geeky quirks, Let&apos;s develop your project together!</p>
            <Link href={"/contact"} className={styles.about__cta}>
              <p className={styles.about__cta__text}>Let&apos;s make this work!</p>
              <FaArrowRightLong className={styles.about__cta__icon} />
            </Link>
          </div>
        </div>
      </div>

      <Developer />

      <Experimenter />

      <Mentor />
    </div>
  );
}