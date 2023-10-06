'use client'
import styles from './styles.module.css'
import Image from 'next/image';
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

interface WheelEvent<T = Element> extends React.MouseEvent<T, globalThis.WheelEvent> {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
}

const strengths: Array<{name: string, image: string, alt: string}> = [
    {
        name: 'Collaborative',
        image: '/images/collaborative.webp',
        alt: 'Collaborative',
    },
    {
        name: 'Enthousiastic',
        image: '/images/enthousiastic.webp',
        alt: 'Enthousiastic',
    },
    {
        name: 'Patient',
        image: '/images/patient.webp',
        alt: 'Patient',
    },
    {
        name: 'Innovative',
        image: '/images/innovative.webp',
        alt: 'Innovative',
    },
    {
        name: 'Considerate',
        image: '/images/considerate.webp',
        alt: 'Considerate',
    },
    {
        name: 'Efficient',
        image: '/images/efficient.webp',
        alt: 'Efficient',
    },
];

const handleScroll = (e: WheelEvent) => {
    const imageContainer = document.querySelector('#strengths') as HTMLDivElement;
    imageContainer.scrollTo({
        left: imageContainer.scrollLeft + e.deltaY *1.5,
        behavior: 'smooth'
    })
}

const toggleScroll = (scrollStyle: string) => {
    document.querySelector('html')!.style.overflow = scrollStyle;
}

export default function Developer() {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref, {safeDisplacement: 11});

    return (
        <div className={styles.developer__container}>
            <h2 className={styles.developer__title}>Developer <span className={styles.superScript}>(1)</span></h2>
            <p className={styles.developer__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus eget pellentesque in nisi. Consequat tristique id ut nulla pretium cras. Dolor mi nullam facilisis nunc sagittis bibendum volutpat.</p>

            <div className={styles.strength__container}>
                <h5 className={styles.strength__title}>Strengths</h5>
                <div className={styles.strength__roulette}  id='strengths' onWheel={(e) => {handleScroll(e)}} onMouseEnter={()=>{toggleScroll('hidden')}} onMouseLeave={()=>{toggleScroll('auto')}} ref={ref}>
                    {strengths.map((strength, index) => {
                        return (
                            <div key={index} {...events} className={styles.strength__item}>
                                <div className={styles.strength__image_container}>
                                    <Image src={strength.image} alt={strength.alt} width={0} height={0} sizes="100vw" className={styles.strength__image}/>
                                    <div className={styles.strength__image_overlay}></div>
                                </div>
                                <p className={styles.strength__name}>{`${index + 1}. ${strength.name}`}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <hr className={styles.divider} />
        </div>
    );
}