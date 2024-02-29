'use client'
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { useProjectContext } from "@/context/globalState";
import { Project } from "@/types/types";


export default function ProjectCard({ project, extraClass }: { project: Project, extraClass: string }) {
  // @ts-ignore
  const [currentProject, setCurrentProject] = useProjectContext();

  return (
    <Link href={`/projects/${project.slug}`} onClick={() => { setCurrentProject(project) }} key={project.name as string} className={`${styles.projectCard} ${extraClass.length > 0 ? styles.projectCard_homePage : ''}`}>
      <Image priority className={styles.projectCard__thumbnail} src={project.thumbnail as string} alt={project.name as string} width={0} height={0} sizes="100%" />
      <div className={styles.projectCard__bottom}>
        <div className={styles.projectCard__textContent}>
          <p className={styles.projectCard__title}>{project.name as string} <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className={styles.projectCard__icon} fill="currentcolor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg></p>
          <p className={styles.projectCard__description}>{project.teaser as string}</p>
        </div>
      </div>
    </Link>
  );
}