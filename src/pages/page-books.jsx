import { useEffect } from 'react'
import { useState } from 'react'
import BookFilter from '../components/book-filter/book-filter'
import { BookList } from '../components/book-list/book-list'
import { BASE_API } from '../constants/constants'
const PageBooks = () => {
	const [books, setBooks] = useState([])
	const [filteredBooks, setFilteredBooks] = useState([])
	const [authors, setAuthors] = useState([])
	const [activeAuthor, setActiveAuthor] = useState('all')
	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await fetch(`${BASE_API}/books`)
				const data = await response.json()
				setBooks(data)

				const authorsSet = new Set()
				for (const book of data) {
					authorsSet.add(book.author)
				}
				const authorsArray = Array.from(authorsSet).sort((a, b) => a.localeCompare(b))
				setAuthors(authorsArray)
				setFilteredBooks(data)
			} catch (error) {
				console.error('Error fetching books:', error)
			}
		}

		fetchBooks()
	}, [])
	const filterBooksByAuthor = (author) => {
		setActiveAuthor(author)

		if (author === 'all') {
			setFilteredBooks(books)
		} else {
			const filtered = books.filter((book) => book.author === author)
			setFilteredBooks(filtered)
		}
	}
	const handleDeleteBook = async (bookId) => {
		try {
			await fetch(`${BASE_API}/books/${bookId}`, {
				method: 'DELETE',
			})
			const updatedBooks = books.filter((book) => book.id !== bookId)
			setBooks(updatedBooks)
			setFilteredBooks(updatedBooks)
		} catch (error) {
			console.error('Error deleting book:', error)
		}
	}
	console.log(filteredBooks)
	return (
		<div>
			<h1 style={{ marginBottom: '20px', fontSize: '30px', textAlign: 'center' }}>Books</h1>
			<BookFilter authors={authors} activeAuthor={activeAuthor} onClick={filterBooksByAuthor} />
			<BookList books={filteredBooks} onDelete={handleDeleteBook} />
		</div>
	)
}
export default PageBooks
