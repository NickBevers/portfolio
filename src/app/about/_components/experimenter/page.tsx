import styles from './styles.module.css'
import InterestCard from './_components/interestCard/page';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const interests = [
  {
    name: 'PayloadCMS',
    description: 'A headless CMS built on the React framework.',
    logo: '/images/payload_cms.svg',
    link: 'https://payloadcms.com/'
  },
  {
    name: 'Web Accessibility',
    description: 'The next step in being able to provide websites suited for everyone.',
    logo: '/images/accessibility.svg',
    link: 'https://www.w3.org/TR/WCAG21/'
  },
  {
    name: 'BunJS',
    description: 'A new all in one toolkit for Javascript & Typescript.',
    logo: '/images/bun.svg',
    link: 'https://bun.sh/'
  },
  {
    name: 'Elysia',
    description: 'An end-to-end framework for BunJS.',
    logo: '/images/elysia.svg',
    link: 'https://elysiajs.com/'
  },
  {
    name: 'Manjaro Linux',
    description: 'My current favourite operating system after switching from Windows.',
    logo: '/images/manjaro.svg',
    link: 'https://manjaro.org/'
  },
  {
    name: 'GraphQL',
    description: 'Another way to query your data.',
    logo: '/images/graphql.svg',
    link: 'https://graphql.org/'
  },
];

export default function Experimenter() {
  return (
    <div className={styles.experimenter__container}>
      <h2 className={styles.experimenter__title}>Experimenter <span className={styles.superScript}>(2)</span></h2>
      <p className={styles.experimenter__description}>When I see something new, I immediately get the urge to experiment around and see how I can use it or implement it to make the most out of it. Everything can be used, but not everything is useful. These are the tools I&apos;m trying right now.</p>

      <div className={styles.experimenter__interest_container}>
        {interests.map((interest, index) => {
          return <InterestCard interestData={interest} key={index} />
        })}
      </div>

      <div className={styles.cta_bottom}>
        <Link href={"/contact"} className={styles.cta_bottom}>
          <p className={styles.cta_bottom__text}>Let&apos;s make this work!</p>
          <FaArrowRightLong className={styles.cta_bottom__icon} />
        </Link>
      </div>

      <hr className={styles.divider} />
    </div>
  );
}