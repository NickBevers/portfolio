// import Image from 'next/image'
import Hero from './_components/hero/page'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <Hero />
    </main>
  )
}
