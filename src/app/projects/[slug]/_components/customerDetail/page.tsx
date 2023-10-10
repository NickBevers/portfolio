import styles from './styles.module.css';

export default function CustomerDetail({purpose, client, date}: {purpose: string, client: string, date: string}) {
    return (
        <section className={styles.project__customerDetails}>
            <div className={styles.project__textContent}>
                <p className={styles.project__purpose}>{purpose}</p>
            </div>
            <div className={styles.project__customerDetail_container}>
                <div className={styles.project}>
                    <p className={styles.project__customerDetail_title}>Client:</p>
                    <p className={styles.project__customerName}>{client}</p>
                </div>

                <div className={styles.project__date}>
                    <p className={styles.project__customerDetail_title}>Date:</p>
                    <p className={styles.project__customerDate}>{date}</p>
                </div>
            </div>
        </section>
    );
}