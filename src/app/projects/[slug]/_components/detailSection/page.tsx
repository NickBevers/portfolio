import styles from './styles.module.css';
import Link from 'next/link';

export default function DetailSection({name, description, skills} :{name: string, description: string, skills: Array<string>}){
    return(
        <div className={styles.project__details}>
            <div className={styles.project__breadcrumb_container}>
                <div className={styles.project__breadcrumb_container__item}>
                    <Link className={styles.link} href={'/projects'}>Projects</Link>
                </div>
                <hr className={styles.project__breadcrumb__line}/>
                <div className={styles.project__breadcrumb_container__item}>
                    <span>{name}</span>
                </div>
            </div>

            <div className={styles.project__textContent}>
                <h1 className={styles.project__title}>{name}</h1>
                <p className={styles.project__description}>{description}</p>
            </div>
            <div className={styles.project__skills}>
                <p className={styles.project__skills_title}>Skills used:</p>
                {skills.map((skill, index: number) => (
                    <span key={index}>{skill}</span>
                ))}
            </div>
        </div>
    )
}