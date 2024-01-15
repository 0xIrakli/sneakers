import styles from './ReviewList.module.css'
import Review from './Review'

const ReviewList = ({ reviews, currentUser }) => {
	return (
		<ul className={styles.reviewList}>
			{reviews.map((reviewData, indx) => (
				<Review key={indx} reviewData={reviewData} currentUser={currentUser} />
			))}
		</ul>
	)
}

export default ReviewList
