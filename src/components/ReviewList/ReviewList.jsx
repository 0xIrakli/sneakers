import styles from './ReviewList.module.css'
import Review from './Review'

const ReviewList = ({ reviews, setReviews, currentUser, setWritingReview }) => {
	return (
		<ul className={styles.reviewList}>
			{reviews.map((reviewData, indx) => (
				<Review
					key={indx}
					reviewData={reviewData}
					reviews={reviews}
					setReviews={setReviews}
					setWritingReview={setWritingReview}
					currentUser={currentUser}
				/>
			))}
		</ul>
	)
}

export default ReviewList
