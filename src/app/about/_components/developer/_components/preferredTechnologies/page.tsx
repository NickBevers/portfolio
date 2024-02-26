'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { Technology } from '../../page';

export const PreferredTechnologies = ({technologies}: {technologies: Technology[]}) => {

  return (
    <div className={styles.technologies}>
      <h5 className={styles.technologies__title}>My preferred stack</h5>

      <div className={styles.technologies__container}>
        {technologies.map((technology, index) => (
          <div key={index} className={styles.technology__item} >
            <Image src={technology.image} alt={technology.alt} className={styles.technology__image} width={96} height={96} />
            <p className={styles.technology__name}>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}