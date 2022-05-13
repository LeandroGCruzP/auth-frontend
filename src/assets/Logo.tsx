import styles from '../styles/logo.module.scss'

export function Logo() {
	return (
		<div className={styles.container}>
			<span className={styles.text}>Auth</span>
			<span className={styles.dot}>.</span>
		</div>
	)
}
