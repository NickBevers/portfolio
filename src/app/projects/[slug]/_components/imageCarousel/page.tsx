import styles from './styles.module.css';
import { useCallback } from 'react';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function ImageCarousel({name, images}: {name: string, images: Array<string>}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        dragFree: true
    }, [Autoplay()]);

    const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
    const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])

    return (
        <section className={`${styles.project__carousel_container} embla`}>
            <div className={`embla__viewport`} ref={emblaRef}>
                <div className={`${styles.project__carousel} embla__container`}>
                    {images.map((image: string, index: number) => (
                        <div key={index} className={`${styles.project__carousel_imageContainer} embla__slide`}>
                            <Image className={styles.project__carousel_image} src={image} alt={`${name} - image ${index}`} width={0} height={0} sizes='100%' />
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