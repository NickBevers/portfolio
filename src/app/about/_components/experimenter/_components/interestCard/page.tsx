import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface InterestCardProps {
    name: string,
    description: string,
    logo: string,
    link: string
}
const interestCard = ({interestData}: {interestData: InterestCardProps}) => {
    return (
        <Link className={styles.interestCard} href={`${interestData.link}`} target='_blank'>
            <div className={styles.interestCard__logo_container}>
                <Image className={styles.interestCard__logo} src={interestData.logo} alt={interestData.name} width={0} height={0} sizes='100%'/>
            </div>
            <h3 className={styles.interestCard__title}>{interestData.name}</h3>
            <p className={styles.interestCard__description}>{interestData.description}</p>
        </Link>
    )
}

export default interestCard