import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import ReviewForm from './components/ReviewForm/ReviewForm'
import ReviewList from './components/ReviewList/ReviewList'
import { product, currentUser, assetsBaseUrl } from './data'
import CartIconWhite from './assets/icon-cart-white.svg'
// import CartIcon from './assets/icon-cart.svg'
import Counter from './components/Counter/Counter'
import Carousel from './components/Carousel/Carousel'
import Stars from './components/Stars/Stars'

// const CartIconWhite = () => {
// 	return (
// 		<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
// 			<path
// 				d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
// 				fill="#FFF"
// 				fill-rule="nonzero"
// 			/>
// 		</svg>
// 	)
// }

const sum = (arr) => {
	return arr.reduce((partialSum, a) => partialSum + a, 0)
}

function App() {
	const [cart, setCart] = useState([
		{
			name: 'Fall Limited Edition Sneakers',
			price: 125.0,
			count: 3.0,
			thumbnail: assetsBaseUrl + 'image-product-1-thumbnail.jpg',
		},
	])

	const [reviews, setReviews] = useState(product.reviews)
	const [writingReview, setWritingReview] = useState('') //'new' 'editing' or ''
	const [itemCount, setItemCount] = useState(0)

	const productPrice = 250
	const productDiscount = 0.5
	const finalPrice = productPrice * (1 - productDiscount)

	const getAverageRating = () => {
		return sum(reviews.map((review) => review.starRating)) / reviews.length
	}

	const currentUserHasReview = reviews.some(
		(review) => review.user == currentUser.name
	)

	const headlines = {
		new: 'Write a review',
		editing: 'Edit your review',
		'': 'Customer reviews',
	}

	let itemData = {
		name: 'Fall Limited Edition Sneakers',
		price: finalPrice,
		count: itemCount,
		thumbnail: assetsBaseUrl + 'image-product-1-thumbnail.jpg',
	}

	const addToCart = (item) => {
		if (item.count <= 0) {
			return false
		}
		if (cart.some((cartItem) => cartItem.name == item.name)) {
			return false
		}
		setCart([...cart, item])
		return true
	}

	const AddToCartBtn = () => (
		<button
			onClick={() => {
				if (addToCart(itemData)) {
					setItemCount(0)
				}
			}}>
			<img style={{ width: '1rem', userSelect: 'none' }} src={CartIconWhite} />
			Add to cart
		</button>
	)

	// bevri kodi gamodis App.jsx shi magram aqedan funqciebis da componentebis gatana sxva filebshi
	// arminda radgan sxva adgilshi ver gamoiyeneba vercerti
	return (
		<>
			<Header cart={cart} setCart={setCart} currentUser={currentUser} />
			<section className={styles.productSection}>
				<div className={styles.carouselContainer}>
					<Carousel
						className={styles.carouselLarge}
						assetsBaseUrl={assetsBaseUrl}
						images={product.images}
						type="large"
					/>
					<Carousel
						className={styles.carouselSmall}
						assetsBaseUrl={assetsBaseUrl}
						images={product.images}
						type="small"
					/>
				</div>
				<div className={styles.detailsContainer}>
					<div className={styles.productDetails}>
						<h5>Sneaker Company</h5>
						<h1>Fall Limited Edition Sneakers</h1>
						<div className={styles.starsContainer}>
							<Stars
								count={Math.round(getAverageRating())}
								starSize="1.4rem"
								starGap="0.28rem"
							/>
							<p>{getAverageRating().toFixed(1)} out of 5</p>
						</div>
						<p>
							These low-profile sneakers are your perfect casual wear companion.
							Featuring a durable rubber outer sole, they'll withstand
							everything the weather can offer.
						</p>
						<div className={styles.priceContainer}>
							<div className={styles.priceRow}>
								<h1 className={styles.price}>${finalPrice.toFixed(2)}</h1>
								<span className={styles.discount}>
									{100 * productDiscount}%
								</span>
							</div>
							{productDiscount > 0 && (
								<p className={styles.originalPrice}>
									${productPrice.toFixed(2)}
								</p>
							)}
						</div>
						<div className={styles.addToCartContainer}>
							<Counter count={itemCount} setCount={setItemCount} />
							<AddToCartBtn />
						</div>
					</div>
				</div>
			</section>
			<section className={styles.reviewSection}>
				<div>
					<h1>{headlines[writingReview]}</h1>
					<button
						onClick={() => setWritingReview('new')}
						className={styles.writeReviewButton}
						disabled={currentUserHasReview}>
						<span className={styles.longText}>Write a Review</span>
						<span className={styles.shortText}>Add</span>
					</button>
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
						assetsBaseUrl={assetsBaseUrl}
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
