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
                    <p className={styles.teacher__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus eget pellentesque in nisi. Consequat tristique id ut nulla pretium cras. Dolor mi nullam facilisis nunc sagittis bibendum volutpat.</p>
                </div>
            </div>

            <hr className={styles.divider}/>
        </div>
    );
}
