import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

interface ProjectType{
    [key: string]: string | Array<string> | Array<{[key: string]: string}>
}


export default function ProjectCard({project: {name, slug, teaser, thumbnail}}: {project: ProjectType}) {
    return(
        <Link href={`/projects/${slug}`} key={name as string} className={styles.projectCard}>
            <Image  className={styles.projectCard__thumbnail} src={thumbnail as string} alt={name as string} width={0} height={0} sizes="100%"/>
            <div className={styles.projectCard__textContent}>
                <p className={styles.projectCard__title}>{name as string}</p>
                <p className={styles.projectCard__description}>{teaser as string}</p>
            </div>
        </Link>
    );
}