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
        name: 'BunJS',
        description: 'A new all in one toolkit for Javascript & Typescript.',
        logo: '/images/bun.svg',
        link: 'https://bun.sh/'
    },
    {
        name: 'NEXT.js',
        description: 'A React framework for building web applications.',
        logo: '/images/next.svg',
        link: 'https://nextjs.org/'
    },
];

export default function Experimenter() {
    return (
        <div className={styles.experimenter__container}>
            <h2 className={styles.experimenter__title}>Experimenter <span className={styles.superScript}>(3)</span></h2>
            <p className={styles.experimenter__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus eget pellentesque in nisi. Consequat tristique id ut nulla pretium cras. Dolor mi nullam facilisis nunc sagittis bibendum volutpat.</p>

            <div className={styles.experimenter__interest_container}>
                {interests.map((interest, index) => {
                    return <InterestCard interestData={interest} key={index}/>
                })}
            </div>

            <div className={styles.cta_bottom}>
                <Link href={"/contact"} className={styles.cta_bottom}>
                        <p className={styles.cta_bottom_text}>Let&apos;s make this work!</p>
                    <FaArrowRightLong className={styles.cta_bottom_icon} />
                </Link>
            </div>
        </div>
    );
}