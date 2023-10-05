'use client';
// import { useEffect } from 'react';
import styles from './styles.module.css'

function scrollDown() {
    window.scrollTo(0, 2000);
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

            
            <h1 className={styles.heroText}>HERO</h1>


            <div className={styles.scrollDown} onClick={scrollDown}>
                <p>Scroll to discover</p>
            </div>
        </section>
    )
}