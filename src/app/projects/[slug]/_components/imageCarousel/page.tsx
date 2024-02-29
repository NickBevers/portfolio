import styles from './styles.module.css';
import { useCallback } from 'react';
import Image from 'next/image';
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
    const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentcolor" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
    const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentcolor" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path></svg>

    return (
        <section className={`${styles.project__carousel_container} embla`}>
            <div className={`embla__viewport`} ref={emblaRef}>
                <div className={`${styles.project__carousel} embla__container`}>
                    {images.map((image: string, index: number) => (
                        <div key={index} className={`${styles.project__carousel_imageContainer} embla__slide`}>
                            <Image priority className={styles.project__carousel_image} src={image} alt={`${name} - image ${index}`} width={0} height={0} sizes='100%' />
                        </div>
                    ))}
                </div>
                <div className={styles.carousel__overlay}></div>

                <div className={styles.carousel__controls}>
                    <span onClick={scrollPrev} className={`${styles.carousel__control_left} embla__prev`}>{arrowLeft}</span>
                    <span onClick={scrollNext} className={`${styles.carousel__control_right} embla__next`}>{arrowRight}</span>
                </div>
            </div>
        </section>
    );
}