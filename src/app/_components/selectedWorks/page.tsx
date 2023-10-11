import styles from './styles.module.css';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import projects from '../../../assets/projects.json'; 
import ProjectCard from '@/app/projects/_components/projectCard/page';

// limit to 3 projects
const projectToLoop = projects["2023"].slice(0, 3);

export default function SelectedWorks() {
    return (
        <section style={{backgroundColor: 'var(--white--secondary)'}}>
            <div className={styles.project__container}>
                <h2 className={styles.selectedWorks__title}>Selected work</h2>

                <div className={styles.projectCards__container}>
                    {projectToLoop.map((item) => (
                        <ProjectCard key={item.name} project={item} />
                    ))}
                </div>


                <Link href={'/projects'} className={styles.cta__container}>
                    <p className={styles.cta__text}>Want to check out more?</p>
                    <FaArrowRightLong className={styles.cta__icon} />
                </Link>
            </div>
        </section>
    );
}