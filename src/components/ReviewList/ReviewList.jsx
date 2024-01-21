import styles from './ReviewList.module.css'
import Review from './Review'

const ReviewList = ({ reviews, setReviews, currentUser, setWritingReview }) => {
	const deleteReview = (user) => {
		setReviews([...reviews].filter((review) => review.user !== user))
	}

	return (
		<ul className={styles.reviewList}>
			{reviews.map((reviewData, index) => (
				<Review
					// key={index} gamoyenebisas reviews washlisas meore review-s gadaecemoda washlili review-s star-ebi
					// (listshi meore reviews drawCount xdeboda washlili reviews drawCount)
					key={reviewData.user + index}
					reviewData={reviewData}
					deleteReview={deleteReview}
					setWritingReview={setWritingReview}
					currentUser={currentUser}
				/>
			))}
		</ul>
	)
}

export default ReviewList
