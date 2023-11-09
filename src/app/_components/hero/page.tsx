'use client';
import styles from './styles.module.css'
// import Image from 'next/image';

function scrollDown() {
    window.scrollTo(0, 800);
}

export default function HeroSection() {

    // useEffect(() => {
    //     const video = document.querySelector('video');
    //     if (!video) return;
    //     // video.playbackRate = 0.85;
    // }, [])

    return (
        <section className={styles.hero__container}>
            {/* <h1 className={styles.title}>HeroSection</h1> */}

            <video autoPlay muted loop preload='auto' className={styles.video}>
                <source src="/videos/heroVideo.webm" type="video/webm"/>
                <source src="/videos/heroVideo.mp4" type="video/mp4"/>
            </video>
            <div className={styles.overlay}></div>

            
            {/* TODO: fill with content */}
            <div className={styles.heroText}>
                <h1 className={styles.hero__title}>Heya, I&apos;m Nick</h1>
                <p className={styles.hero__description}>Your best friend for <br className={styles.mobileBreak}/> everything dev-related</p>
            </div>
            {/* <Image src={'/images/wave.webp'} alt='Waving hand'/> */}


            <div className={styles.scrollDown} onClick={scrollDown}>
                <p>Scroll to discover</p>
            </div>
        </section>
    )
}