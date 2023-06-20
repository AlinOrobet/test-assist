// TASK 2 START
import { Navigation } from '../navigation/navigation'
import styles from './header.module.css'
export const Header = () => {
	return (
		<header className={styles.header}>
			<Navigation />
		</header>
	)
}
