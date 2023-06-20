import styles from './book-filter.module.css'
const BookFilter = ({ authors, onClick, activeAuthor }) => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				{activeAuthor === 'all' ? (
					<h1>Showing all books</h1>
				) : (
					<h1>Showing books written by {activeAuthor}</h1>
				)}
				<div className={styles.authorsRow}>
					{authors?.map((author) => (
						<button
							className={`${activeAuthor === author && styles.isActive}`}
							key={author}
							onClick={() => onClick(author)}>
							{author}
						</button>
					))}
					<button
						className={`${activeAuthor === 'all' && styles.isActive}`}
						onClick={() => onClick('all')}>
						All
					</button>
				</div>
			</div>
		</div>
	)
}

export default BookFilter
