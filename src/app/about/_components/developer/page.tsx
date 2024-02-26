import styles from './styles.module.css';
import { PreferredTechnologies } from './_components/preferredTechnologies/page';

export interface Technology {
  name: string;
  image: string;
  alt: string;
}

const technologies: Technology[]= [
   {
    name: 'React',
    image: '/images/technologies/React.svg',
    alt: 'React',
  },
  {
    name: 'Next.js',
    image: '/images/technologies/NextJS.svg',
    alt: 'Next.js',
  },
  {
    name: 'TypeScript',
    image: '/images/technologies/Typescript.svg',
    alt: 'TypeScript',
  },
  {
    name: 'Node.js',
    image: '/images/technologies/NodeJS.svg',
    alt: 'Node.js',
  },
  {
    name: 'Laravel',
    image: '/images/technologies/Laravel.svg',
    alt: 'Laravel',
  },
  {
    name: 'GraphQL',
    image: '/images/technologies/GraphQL.svg',
    alt: 'GraphQL',
  },
  {
    name: 'MySQL',
    image: '/images/technologies/MySQL.svg',
    alt: 'MySQL',
  },
  {
    name: 'MongoDB',
    image: '/images/technologies/MongoDB.svg',
    alt: 'MongoDB',
  },
  {
    name: 'Git',
    image: '/images/technologies/Git.svg',
    alt: 'Git',
  },
  {
    name: 'Manjaro',
    image: '/images/technologies/Manjaro.svg',
    alt: 'Manjaro',
  }
];

export default function Developer() {
  return (
    <div className={styles.developer__container}>
      <h2 className={styles.developer__title}>Developer <span className={styles.superScript}>(1)</span></h2>
      <p className={styles.developer__description}>As a developer, I love nothing more than to spend my days filled with doing what I do best. Make dreams a (digital) reality. I love creating clean and proper code and I&apos;m always open to learn something new.</p>

      <PreferredTechnologies technologies={technologies} />

      <hr className={styles.divider} />
    </div>
  );
}