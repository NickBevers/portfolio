'use client'
import styles from "./styles.module.css";
import projectsJson from "../../assets/projects.json";
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import ProjectCard from "./_components/projectCard/page";

interface ProjectsType{
    [key: string]: Array<{
        [key: string]: string | Array<string> | Array<{[key: string]: string}>
    }>
}

// @ts-ignore
const projects: ProjectsType = projectsJson;
const projectYears: Array<string> = Object.keys(projects).reverse();

export default function Projects() {
    return (
        <section className={styles.projects__container}>
            <Accordion className={styles.projects__accordion}  selectionMode="multiple" defaultExpandedKeys={[projectYears[0] as string]}>
                {projectYears.map((year) => (
                    <AccordionItem
                    key={year as string} 
                    title={year} 
                    classNames={{
                        base: styles.projects__accordion_base,
                        title: styles.projects__accordion_title,
                        titleWrapper: styles.projects__accordion_titleWrapper,
                        content: styles.projects__accordion_content,
                        trigger: styles.projects__accordion_trigger,
                        indicator: styles.projects__accordion_indicator,
                    }}
                    >
                        
                    <div className={styles.projects__accordion_container}>
                        {projects[year as string].map((project) => (
                            ProjectCard({project})
                        ))}
                    </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
