import styles from './Review.module.css'
import ProfilePlaceholder from '../../assets/user-placeholder.png'

const Review = ({ reviewData, currentUser }) => {
	const isFromCurrentUser = reviewData.user === currentUser.name

	return (
		<li className={styles.reviewContainer}>
			<img src={ProfilePlaceholder} />
			<div className={styles.details}>
				<div>
					<h1>{reviewData.user}</h1>
					{isFromCurrentUser && (
						<>
							<button className={styles.editButton}>Delete</button>
							<button className={styles.editButton}>Edit</button>
						</>
					)}
				</div>
				<p>{reviewData.starRating} stars</p>
				<h1>{reviewData.headline}</h1>
				<p>{reviewData.writtenReview}</p>
			</div>
		</li>
	)
}

export default Review
