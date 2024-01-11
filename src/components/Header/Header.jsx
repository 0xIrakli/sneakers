import styles from './Header.module.css'
import CartImg from '../../assets/icon-cart.svg'
import ProfilePlaceholderImg from '../../assets/user-placeholder.png'
import { assetsBaseUrl } from '../../data'
import { useState } from 'react'
import Cart from './Cart'

// yvela components qonda sxva margin zemot da qvemot amitom containershi chavsvi yvelaferi da ubralod padding davade containers

const HamburgerMenu = () => {
	return (
		<div className={styles.hamburger}>
			<span />
			<span />
			<span />
		</div>
	)
}

const Profile = ({ currentUser }) => {
	return (
		<button className={styles.profile}>
			<img
				src={
					currentUser
						? assetsBaseUrl + currentUser.profileImage
						: ProfilePlaceholderImg
				}
			/>
		</button>
	)
}

function Header({ currentUser = null }) {
	const [cart, setCart] = useState([
		{
			name: 'Fall Limited Edition Sneakers',
			price: 125.0,
			count: 3.0,
			thumbnail: assetsBaseUrl + 'image-product-1-thumbnail.jpg',
		},
		{
			name: 'Fall Limited Edition Sneakers',
			price: 121235.0,
			count: 3.0,
			thumbnail: assetsBaseUrl + 'image-product-1-thumbnail.jpg',
		},
	])

	return (
		<div className={styles.headerContainer}>
			<header className={styles.header}>
				<HamburgerMenu />
				<a href="#">
					<img src="/logo.svg" className={styles.logo} />
				</a>
				<nav className={styles.nav}>
					<a href="#Collections">Collections</a>
					<a href="#Men">Men</a>
					<a href="#Women">Women</a>
					<a href="#About">About</a>
					<a href="#Contact">Contact</a>
				</nav>
				<div className={styles.flexEnd}>
					<Cart cart={cart} setCart={setCart} />
					<Profile currentUser={currentUser} />
				</div>
			</header>
		</div>
	)
}

export default Header
