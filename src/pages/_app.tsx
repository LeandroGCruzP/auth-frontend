import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Sidebar } from '../components/Sidebar'
import '../styles/global.scss'
import styles from '../styles/home.module.scss'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	return (
		<div className={styles.container}>
			{router.pathname !== '/' && <Sidebar />}
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
