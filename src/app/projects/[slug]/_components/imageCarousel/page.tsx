import styles from './styles.module.css';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function ImageCarousel({name, images}: {name: string, images: Array<string>}) {
    return (
        <section className={styles.project__carousel_container}>
            <div className={styles.project__carousel}>
                <div className={styles.carousel__controls}>
                    <FaArrowLeftLong className={styles.carousel__control_left} />
                    <FaArrowRightLong className={styles.carousel__control_right} />
                </div>

                {images.map((image: string, index: number) => (
                    <div key={index} className={styles.project__carousel_imageContainer}>
                        <Image className={styles.project__carousel_image} src={image} alt={`${name} - image ${index}`} width={0} height={0} sizes='100%' />
                    </div>
                ))}
            </div>
        </section>
    );
}