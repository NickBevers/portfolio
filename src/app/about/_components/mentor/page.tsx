import styles from "./styles.module.css";
import Image from 'next/image';

export default function Mentor() {
  return (
    <div className={styles.mentor__container}>
      <div className={styles.mentor__content}>
        <div className={styles.mentor__image_container}>
          <Image src="/images/teaching.webp" alt="Teaching" width={0} height={0} sizes="100%" className={styles.mentor__image} />
        </div>
        <div className={styles.mentor__textContent}>
          <h2 className={styles.mentor__title}>Mentor <span className={styles.superScript}>(3)</span></h2>
          <p className={styles.mentor__description}>When I get the opportunity, I never pass up on having the pleasure of sharing my knowledge with others. Being able to help someone is something I thoroughly enjoy and I hope to continue that.</p>
        </div>
      </div>

      <hr className={styles.divider} />
    </div>
  );
}
