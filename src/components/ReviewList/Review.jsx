import styles from './Review.module.css'
import ProfilePlaceholder from '../../assets/user-placeholder.png'
import Stars from '../Stars/Stars'
import { useState } from 'react'

const Review = ({ reviewData, currentUser }) => {
	const isFromCurrentUser = reviewData.user === currentUser.name

	return (
		<li className={styles.reviewContainer}>
			<img src={ProfilePlaceholder} />
			<div className={styles.details}>
				<div className={styles.controls}>
					<h1>{reviewData.user}</h1>
					{isFromCurrentUser && (
						<>
							<button className={styles.editButton}>Delete</button>
							<button className={styles.editButton}>Edit</button>
						</>
					)}
				</div>
				<Stars count={reviewData.starRating} />
				<h1>{reviewData.headline}</h1>
				<p>{reviewData.writtenReview}</p>
			</div>
		</li>
	)
}

export default Review
