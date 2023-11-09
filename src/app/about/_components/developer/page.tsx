import styles from './styles.module.css';
import ImageCarousel from './_components/imageCarousel/page';

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

export default function Developer() {
    return (
        <div className={styles.developer__container}>
            <h2 className={styles.developer__title}>Developer <span className={styles.superScript}>(1)</span></h2>
            <p className={styles.developer__description}>As a developer, I love nothing more than to spend my days filled with doing what I do best. Make dreams a (digital) reality. I love creating clean and proper code and I&apos;m always open to learn something new.</p>

            <div className={styles.strength__container}>
                <h5 className={styles.strength__title}>Strengths</h5>
                <ImageCarousel data={strengths} />
            </div>

            <hr className={styles.divider} />
        </div>
    );
}