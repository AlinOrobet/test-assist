// TASK 6 START

import { useState } from 'react'
import styles from './book-item.module.css'

export const BookItem = ({ id, name, author, stars, onDelete }) => {
	const [showStars, setShowStars] = useState(false)
	const handleDelete = () => {
		onDelete(id)
	}
	return (
		<div className={styles.bookItem}>
			<button className={styles.deleteButton} onClick={handleDelete}>
				Delete
			</button>
			<h3 className={styles.bookTitle}>
				<strong>name: </strong>
				{name}
				{/* book name here */}
			</h3>

			<p className={styles.bookAuthor}>
				<strong>author: </strong>
				{/* book author here */}
				{author}
			</p>

			{/* TASK 6 TIP: stars should be displayed conditionally */}
			{showStars && (
				<p className={styles.toggleButton}>
					<strong>stars: </strong>
					{/* book stars here */}
					{stars}
				</p>
			)}

			<button onClick={() => setShowStars(!showStars)}>
				{showStars ? 'hide stars' : 'show stars'}
			</button>
		</div>
	)
}
