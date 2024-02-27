'use client';
import styles from './styles.module.css'

function scrollDown() {
  window.scrollTo(0, 800);
}

export default function HeroSection() {

  return (
    <section className={styles.hero__container}>
      <video autoPlay muted loop preload='auto' className={styles.video}>
        <source src="/videos/marbles.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>

      <div className={styles.heroText}>
        <h1 className={styles.hero__title}>Heya, I&apos;m Nick</h1>
        <p className={styles.hero__description}>Your best friend for<br className={styles.mobileBreak} /> everything dev-related</p>
      </div>

      <div className={styles.scrollDown} onClick={scrollDown}>
        <p>Scroll to discover</p>
      </div>
    </section>
  )
}