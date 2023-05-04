import styles from './style.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <strong className={styles.strongCss}>Ignite Feed</strong>
        </header>
    )
}