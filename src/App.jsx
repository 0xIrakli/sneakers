import styles from './App.module.css'
import Header from './components/Header/Header'
import ReviewList from './components/ReviewList/ReviewList'
import { currentUser, product } from './data'

function App() {
	return (
		<>
			<Header currentUser={currentUser} />
			<section className={styles.reviewSection}>
				<h1>Customer reviews</h1>
				<ReviewList reviews={product.reviews} currentUser={currentUser} />
			</section>
		</>
	)
}

export default App
