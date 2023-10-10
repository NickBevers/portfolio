'use client';
import styles from './styles.module.css';
import { useCallback } from 'react';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function ImageCarousel({data}: {data: Array<{name: string, image: string, alt: string}>}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        dragFree: true
    }, [Autoplay()]);

    const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
    const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])

    return (
        <section className={`${styles.strength__carousel_container} embla`}>
            <div className={`embla__viewport`} ref={emblaRef}>
                <div className={`${styles.strength__carousel} embla__container`}>
                    {data.map((item, index) => (
                        <div className={`${styles.strength__carousel_imageContainer} embla__slide`} key={index} >
                            <Image className={styles.strength__carousel_image} src={item.image} alt={`${item.name} - image ${index}`} width={0} height={0} sizes='100%' />
                            <p className={styles.strength__name}>{`${index + 1}. ${item.name}`}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.carousel__controls}>
                    <span onClick={scrollPrev} className={`${styles.carousel__control_left} embla__prev`}><FaArrowLeftLong /></span>
                    <span onClick={scrollNext} className={`${styles.carousel__control_right} embla__next`}><FaArrowRightLong /></span>
                </div>
            </div>
        </section>
    );
}