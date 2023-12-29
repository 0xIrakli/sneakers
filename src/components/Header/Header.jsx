import styles from './Header.module.css'
import Cart from '../../assets/icon-cart.svg'
import ProfilePlaceholder from '../../assets/user-placeholder.png'
import { assetsBaseUrl } from '../../data'

function Header({ currentUser = null }) {
	return (
		<header className={styles.header}>
			<a href="#">
				<img src="/logo.svg" />
			</a>
			<div>
				<nav className={styles.nav}>
					<a href="#Collections">Collections</a>
					<a href="#Men">Men</a>
					<a href="#Women">Women</a>
					<a href="#About">About</a>
					<a href="#Contact">Contact</a>
				</nav>
				<button className={styles.cart}>
					<img src={Cart} />
				</button>
				{/* am shemtxvevashi profile button-ia da ara <a> radgan arvici ra xdeba dacherisas da button ufro martivia stylebistvis */}
				<button className={styles.profile}>
					<img
						src={
							currentUser
								? assetsBaseUrl + currentUser.profileImage
								: ProfilePlaceholder
						}
					/>
				</button>
			</div>
		</header>
	)
}

export default Header
