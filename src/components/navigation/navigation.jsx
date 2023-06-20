// TASK 4 START
import { Link } from 'react-router-dom'
import styles from './navigation.module.css'
export const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.navigationList}>
				<li className={styles.navigationItem}>
					{/* TASK 4 TIP: using a simple <a> tag will reload the browser. You need a special component here. */}
					<Link className={styles.navigationLink} to='/home'>
						Home
					</Link>
				</li>
				<li className={styles.navigationItem}>
					<Link className={styles.navigationLink} to='/about'>
						About
					</Link>
				</li>
				<li className={styles.navigationItem}>
					<Link className={styles.navigationLink} to='/books'>
						Books
					</Link>
				</li>
			</ul>
		</nav>
	)
}
