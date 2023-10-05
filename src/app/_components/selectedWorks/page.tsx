import styles from './styles.module.css';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from './_components/projectCard/page';

export default function SelectedWorks() {
    return (
        <section style={{backgroundColor: 'var(--white--secondary)'}}>
            <div className={styles.project__container}>
                <h2 className={styles.selectedWorks__title}>Selected work</h2>

                <div className={styles.projectCards__container}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>


                <Link href={'/projects'} className={styles.cta__container}>
                    <p className={styles.cta__text}>Want to check out more?</p>
                    <FaArrowRightLong className={styles.cta__icon} />
                </Link>
            </div>
        </section>
    );
}