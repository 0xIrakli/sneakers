import styles from './Header.module.css'
import Cart from '../../assets/icon-cart.svg'
import ProfilePlaceholder from '../../assets/user-placeholder.png'
import { assetsBaseUrl } from '../../data'
import { useState } from 'react'

// yvela components qonda sxva margin zemot da qvemot amitom containershi chavsvi yvelaferi da ubralod padding davade containers

function Header({ currentUser = null }) {
	const [cartOpen, setCartOpen] = useState(false)

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.hamburger}>
					<span />
					<span />
					<span />
				</div>
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
					<button className={styles.cart}>
						<img src={Cart} />

						{cartOpen && (
							<div className={styles.dropDown}>
								<span></span>
							</div>
						)}
					</button>
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
		</div>
	)
}

export default Header
