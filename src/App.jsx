import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import ReviewForm from './components/ReviewForm/ReviewForm'
import ReviewList from './components/ReviewList/ReviewList'
import { product, currentUser, assetsBaseUrl } from './data'
// import Carousel from './components/Carousel/Carousel'
import Stars from './components/Stars/Stars'

function App() {
	const [reviews, setReviews] = useState(product.reviews)
	const [writingReview, setWritingReview] = useState('') //'new' 'editing' or ''
	const [count, setCount] = useState(0)
	const productPrice = 250
	const productDiscount = 0.5

	let headlines = {
		new: 'Write a review',
		editing: 'Edit your review',
		'': 'Customer reviews',
	}

	return (
		<>
			<Header currentUser={currentUser} />
			<section className={styles.productSection}>
				<div className={styles.carouselContainer}>
					{/* <Carousel
						assetsBaseUrl={assetsBaseUrl}
						images={product.images}
						type="large"
					/> */}
				</div>
				<div className={styles.productDetails}>
					<h5>Sneaker Company</h5>
					<h1>Fall Limited Edition Sneakers</h1>
					<div className={styles.starsContainer}>
						<Stars count={4} starSize="1.4rem" starGap="0.28rem" />
						<p>4.2 out of 5</p>
					</div>
					<p>
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer.
					</p>
					<div className={styles.priceContainer}>
						<h1 className={styles.price}>
							${(productPrice * (1 - productDiscount)).toFixed(2)}
						</h1>
						<span className={styles.discount}>{100 * productDiscount}%</span>
					</div>
					{productDiscount > 0 && (
						<p className={styles.originalPrice}>${productPrice.toFixed(2)}</p>
					)}
				</div>
			</section>
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
