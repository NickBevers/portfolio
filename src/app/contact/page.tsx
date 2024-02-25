import SocialLinks from "./_components/socialLinks/page";
import styles from "./styles.module.css";
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__textContent}>
        <h1 className={styles.contact__title}>Let&apos;s <span className={styles.title__attention}>collaborate!</span></h1>
        <p className={styles.contact__description}>Let&apos;s see what kind of graphical magic we can create together. <br /> Send me an email, call me or hit me up on one of my socials.</p>
      </div>

      <div className={styles.contact__contentBubbles}>
        <div className={styles.bubbleSocials}>
          <div className={styles.center}>
            <SocialLinks />
          </div>
        </div>
        <div className={styles.bubbleEmail}>
          <div className={styles.center}>
            <p className={styles.bubbleText}>hello@nickbevers.be</p>
          </div>
        </div>
        <div className={styles.bubblePhone}>
          <div className={styles.center}>
            <p className={styles.bubbleText}>+32 477 35 55 32</p>
          </div>
        </div>

        <div className={styles.bubbleMobile}>
          <div className={styles.center}>
            <p className={styles.bubbleText}>
              hello@nickbevers.be
              <br />
              +32 477 35 55 32
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contact__bubbles}>
        <Image className={styles.bubbleTopLeft} src="/images/bubbles/bubble-xl.svg" alt="bubbles" width={800} height={800} />
        <Image className={styles.bubbleTopRight} src="/images/bubbles/bubble-xl.svg" alt="bubbles" width={450} height={450} />
        <Image className={styles.bubbleBottomRight} src="/images/bubbles/bubble.svg" alt="bubbles" width={300} height={300} />
      </div>
    </div>
  );
}
