'use client'
import styles from './styles.module.css';
import { redirect } from 'next/navigation';
import { useProjectContext } from '@/context/globalState';
import Image from 'next/image';

import DetailSection from './_components/detailSection/page';
import ImageCarousel from './_components/imageCarousel/page';

// interface ProjectData{
//     [key: string]: string | Array<string> | Array<{[key: string]: string}>
// }

export default function Project() {
    // @ts-ignore
    const [currentProject, setCurrentProject] = useProjectContext();
    console.log(currentProject);
    Object.keys(currentProject).length === 0 ? redirect("/projects") : null;
    
    return (
        <div className={styles.project__container}>
            {/* full size image */}
            <div className={styles.project__coverImage_container}>
                <Image className={styles.project__coverImage} src={currentProject.cover} alt={`${currentProject.title} - cover image`} width={0} height={0} sizes='100%' />
            </div>

            {/* Project details (title, description + skills used) */}
            <DetailSection name={currentProject.name} description={currentProject.description} skills={currentProject.skills} />

            {/* image carousel */}
            <ImageCarousel name={currentProject.name} images={currentProject.images} />

            {/* Customer information (or why I made it and what purpose it serves) */}

            {/* related projects / other projects */}
        </div>
    );
}
