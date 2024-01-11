import styles from './Cart.module.css'
import CartImg from '../../assets/icon-cart.svg'
import DeleteImg from '../../assets/icon-delete.svg'
import { useState } from 'react'

const CartItem = ({ id, name, price, count, thumbnail, cart, setCart }) => {
	const deleteItem = () => {
		setCart([...cart].filter((_, index) => index !== id))
	}

	return (
		<li className={styles.cartItem}>
			<img src={thumbnail} className={styles.thumbnail} />
			<div>
				<p>{name}</p>
				<p>
					{`$${price.toFixed(2)} x ${count} `}
					<strong>{`$${(price * count).toFixed(2)}`}</strong>
				</p>
			</div>
			<button onClick={deleteItem}>
				<img src={DeleteImg} />
			</button>
		</li>
	)
}

const Cart = ({ cart, setCart }) => {
	const [cartOpen, setCartOpen] = useState(false)

	return (
		<div className={styles.container}>
			<button className={styles.cart} onClick={() => setCartOpen(!cartOpen)}>
				<img src={CartImg} />
			</button>

			{cartOpen && (
				<div className={styles.dropDown}>
					<h1>Cart</h1>
					{cart.length == 0 ? (
						<p>Your cart is empty.</p>
					) : (
						<div className={styles.checkoutContainer}>
							<ul>
								{cart.map((item, indx) => (
									<CartItem
										key={indx}
										id={indx}
										{...item}
										cart={cart}
										setCart={setCart}
									/>
								))}
							</ul>
							<button className={styles.checkoutBtn}>Checkout</button>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Cart
