import styles from './Counter.module.css'
import minusIcon from '../../assets/icon-minus.svg'
import plusIcon from '../../assets/icon-plus.svg'

const Counter = ({ count, setCount }) => {
	return (
		<div className={styles.container}>
			<button onClick={() => setCount(Math.max(count - 1, 0))}>
				<img src={minusIcon} className={styles.icon} />
			</button>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>
				<img src={plusIcon} className={styles.icon} />
			</button>
		</div>
	)
}

export default Counter
