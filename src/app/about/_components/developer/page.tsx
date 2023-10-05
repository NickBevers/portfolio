import styles from './styles.module.css'
import Image from 'next/image';

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
            <h1>Developer <span className={styles.superScript}>(1)</span></h1>
            <p className={styles.developer__description}>This is the developer section of my about page</p>

            <div className={styles.strength__container}>
                <h5>Strengths</h5>
                <div className={styles.strength__roulette}>
                    {strengths.map((strength, index) => {
                        return (
                            <div key={index} className={styles.strength__item}>
                                <div className={styles.strength__image_container}>
                                    <Image src={strength.image} alt={strength.alt} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
                                </div>
                                <p className={styles.strength__name}>{strength.name}</p>
                            </div>
                        );
                    })}
                </div>

            </div>

            <hr className={styles.divider} />
        </div>
    );
}