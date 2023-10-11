import styles from "./styles.module.css";
import ProjectAccordion from './_components/accordion/page';

export default function Projects() {
    return (
        <section className={styles.projects__container}>
            <ProjectAccordion />
        </section>
    );
}
