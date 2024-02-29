'use client'
import styles from './styles.module.css';
import { redirect } from 'next/navigation';
import { useProjectContext } from '@/context/globalState';
import Image from 'next/image';
import Head from 'next/head';
import DetailSection from './_components/detailSection/page';
import ImageCarousel from './_components/imageCarousel/page';
import CustomerDetail from './_components/customerDetail/page';

export default function Project() {
  // @ts-ignore
  const [currentProject, setCurrentProject] = useProjectContext();
  Object.keys(currentProject).length === 0 ? redirect("/projects") : null;

  return (
    <div className={styles.project__container}>
      <div className={styles.project__coverImage_container}>
        <Image priority={true} className={styles.project__coverImage} src={currentProject.cover} alt={`${currentProject.title} - cover image`} width={0} height={0} sizes='100%' />
      </div>

      <DetailSection name={currentProject.name} description={currentProject.description} skills={currentProject.skills} link={currentProject.link} />

      {/* preloading the images */}
      {currentProject.images.map((image: string, index: number) => (<Head key={index}><link rel="preload" href={image} as="image" /></Head>))}

      <ImageCarousel name={currentProject.name} images={currentProject.images} />

      <CustomerDetail purpose={currentProject.purpose} client={currentProject.client} date={currentProject.date} />
    </div>
  );
}
