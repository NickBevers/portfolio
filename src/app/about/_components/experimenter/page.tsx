import styles from './styles.module.css'
import InterestCard from './_components/interestCard/page';
import Link from 'next/link';

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
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.cta_bottom__icon} width="32" height="32" fill="currentcolor" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
        </Link>
      </div>

      <hr className={styles.divider} />
    </div>
  );
}