import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import ReviewForm from './components/ReviewForm/ReviewForm'
import ReviewList from './components/ReviewList/ReviewList'
import { currentUser, product } from './data'

function App() {
	const [reviews, setReviews] = useState(product.reviews)
	const [writingReview, setWritingReview] = useState('') //'new' 'editing' or ''

	let headlines = {
		new: 'Write a review',
		editing: 'Edit your review',
		'': 'Customer reviews',
	}

	return (
		<>
			<Header currentUser={currentUser} />
			<section className={styles.reviewSection}>
				<div>
					<h1>{headlines[writingReview]}</h1>
					{!reviews.some((review) => review.user == currentUser.name) && (
						<button
							onClick={() => setWritingReview('new')}
							className={styles.writeReviewButton}>
							<span className={styles.longText}>Write a Review</span>
							<span className={styles.shortText}>Add</span>
						</button>
					)}
				</div>
				{writingReview !== '' ? (
					<ReviewForm
						currentUser={currentUser}
						reviews={reviews}
						setReviews={setReviews}
						setWritingReview={setWritingReview}
						isEditing={writingReview === 'editing'}
					/>
				) : (
					<ReviewList
						reviews={reviews}
						setReviews={setReviews}
						currentUser={currentUser}
						setWritingReview={setWritingReview}
					/>
				)}
			</section>
		</>
	)
}

export default App
