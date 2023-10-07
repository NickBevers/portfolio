import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function interestCard({name, description, logo, link}: {name: string, description: string, logo: string, link: string}){
    return (
        <Link className={styles.interestCard} href={`${link}`} target='_blank'>
            <div className={styles.interestCard__logo_container}>
                <Image className={styles.interestCard__logo} src={logo} alt={name} width={0} height={0} sizes='100%'/>
            </div>
            <h3 className={styles.interestCard__title}>{name}</h3>
            <p className={styles.interestCard__description}>{description}</p>
        </Link>
    )
}