import styles from "./styles.module.css";
import Image from 'next/image';

export default function Teacher() {
    return (
        <div className={styles.teacher__container}>
            <div className={styles.teacher__content}>
                <div className={styles.teacher__image_container}>
                    <Image src="/images/teaching.webp" alt="Teaching" width={0} height={0} sizes="100%" className={styles.teacher__image}/>
                </div>
                <div className={styles.teacher__textContent}>
                    <h2 className={styles.teacher__title}>Teacher <span className={styles.superScript}>(2)</span></h2>
                    <p className={styles.teacher__description}>When I get the opportunity, I never pass up on having the pleasure of sharing my knowledge with others. Being able to help someone is something I thoroughly enjoy and I hope to continue that.</p>
                </div>
            </div>

            <hr className={styles.divider}/>
        </div>
    );
}
