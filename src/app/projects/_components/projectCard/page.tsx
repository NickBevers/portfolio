'use client'
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { useProjectContext } from "@/context/globalState";
import { Project } from "@/types/types";
import { FaCirclePlus } from "react-icons/fa6";


export default function ProjectCard({project, extraClass}: {project: Project, extraClass: string}) {
    // @ts-ignore
    const [currentProject, setCurrentProject] = useProjectContext();

    return(
        <Link href={`/projects/${project.slug}`} onClick={() => {setCurrentProject(project)}} key={project.name as string} className={`${styles.projectCard} ${extraClass.length > 0 ? styles.projectCard_homePage : ''}`}>
            <Image  className={styles.projectCard__thumbnail} src={project.thumbnail as string} alt={project.name as string} width={0} height={0} sizes="100%"/>
            <div className={styles.projectCard__bottom}>
                <div className={styles.projectCard__textContent}>
                    <p className={styles.projectCard__title}>{project.name as string}</p>
                    <p className={styles.projectCard__description}>{project.teaser as string}</p>
                </div>
                <FaCirclePlus className={styles.projectCard__icon} />
            </div>
        </Link>
    );
}