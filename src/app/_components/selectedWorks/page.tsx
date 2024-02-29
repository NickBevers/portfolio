import styles from './styles.module.css';
import Link from 'next/link';
import projects from '../../../assets/projects.json';
import ProjectCard from '@/app/projects/_components/projectCard/page';

const projectToLoop = [projects["2023"][0], projects["2023"][3],  projects["2022"][0], projects["2023"][2]]

export default function SelectedWorks() {
  return (
    <section style={{ backgroundColor: 'var(--white--secondary)' }}>
      <div className={styles.project__container}>
        <h2 className={styles.selectedWorks__title}>Selected work</h2>

        <div className={styles.projectCards__container}>
          {projectToLoop.map((item) => (
            <ProjectCard key={item.name} project={item} extraClass={'homePage'} />
          ))}
        </div>

        <Link href={'/projects'} className={styles.cta__container}>
          <p className={styles.cta__text}>Check out more?</p>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.cta__icon} width="32" height="32" fill="currentcolor" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
        </Link>
      </div>
    </section>
  );
}