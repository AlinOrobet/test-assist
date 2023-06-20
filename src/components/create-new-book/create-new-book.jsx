import { useState } from 'react'
import styles from './create-new-book.module.css'
import { BASE_API } from '../../constants/constants'
const CreateNewBook = () => {
	const [author, setAuthor] = useState('')
	const [name, setName] = useState('')
	const [stars, setStars] = useState(0)
	const handleSubmit = async (e) => {
		e.preventDefault()
		const newBook = {
			author,
			name,
			stars,
		}
		try {
			const response = await fetch(`${BASE_API}/books`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newBook),
			})

			if (response.ok) {
				setAuthor('')
				setName('')
				setStars(0)
			} else {
				console.error('Failed to add book:', response.status)
			}
		} catch (error) {
			console.error('Error adding book:', error)
		}
	}
	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Create new book</h1>
				<input
					type='text'
					placeholder='Author'
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type='number'
					placeholder='Stars'
					value={stars}
					onChange={(e) => setStars(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default CreateNewBook
