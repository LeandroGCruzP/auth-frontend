import Link from 'next/link'
import { Logo } from '../assets/Logo'
import styles from '../styles/sidebar.module.scss'

export function Sidebar() {
	return (
		<div className={styles.container}>
			<Logo />

			<div className={styles.navSection}>
				<Link passHref href={'/dashboard'}>
					Dashboard
				</Link>
				<Link passHref href={'/users'}>
					Users
				</Link>
				<Link passHref href={'/metrics'}>
					Metrics
				</Link>
			</div>
		</div>
	)
}
