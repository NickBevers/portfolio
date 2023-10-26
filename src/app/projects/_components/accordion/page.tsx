'use client'
import styles from "./styles.module.css";
import projectsJson from "../../../../assets/projects.json";
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import ProjectCard from "../../_components/projectCard/page";
import { Project } from "@/types/types";

interface ProjectsType {
    [key: string]: Project[];
}

const projects: ProjectsType = projectsJson;
const projectYears: string[] = Object.keys(projects).reverse();

export default function ProjectAccordion() {
    return (
        <Accordion className={styles.projects__accordion}  selectionMode="multiple" defaultExpandedKeys={[projectYears[0] as string]}>
            {projectYears.map((year) => (
                <AccordionItem
                    key={year}
                    title={year} 
                    classNames={{
                        base: styles.projects__accordion_base,
                        title: styles.projects__accordion_title,
                        heading: styles.projects__accordion_heading,
                        titleWrapper: styles.projects__accordion_titleWrapper,
                        content: styles.projects__accordion_content,
                        trigger: styles.projects__accordion_trigger,
                        indicator: styles.projects__accordion_indicator,
                    }}
                >
                    
                    <div className={styles.projects__accordion_container}>
                        {projects[year].map((item) => (
                            <ProjectCard key={item.name} project={item} extraClass=""/>
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
