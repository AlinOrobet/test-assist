// TASK 5 START
// import { useEffect, useState } from 'react'
// import { BASE_API } from '../../constants/constants'
import { BookItem } from '../book-item/book-item'
import styles from './book-list.module.css'
export const BookList = ({ books, onDelete }) => {
	// const [books, setBooks] = useState([])
	// useEffect(() => {
	// 	const fetchBooks = async () => {
	// 		try {
	// 			const response = await fetch(`${BASE_API}/books`)
	// 			const data = await response.json()
	// 			setBooks(data)
	// 		} catch (error) {
	// 			console.error('Error fetching books:', error)
	// 		}
	// 	}

	// 	fetchBooks()
	// }, [])
	return (
		<>
			<div className={styles.bookList}>
				{books?.map((book) => (
					<BookItem
						key={book.id}
						id={book.id}
						name={book.name}
						author={book.author}
						stars={book.stars}
						onDelete={onDelete}
					/>
				))}
			</div>
		</>
	)
}
