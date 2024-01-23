import { useState } from 'react'
import styles from './Carousel.module.css'
import IconPrev from '../../assets/icon-previous.svg'
import IconNext from '../../assets/icon-next.svg'

const LargeCarousel = ({ className, images, thumbnails }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div className={`${styles.container} ${className}`}>
			<div className={styles.mainContainer} style={{ '--index': currentIndex }}>
				{images.map((img, index) => (
					<img key={index} src={img} />
				))}
			</div>
			<ul className={styles.selectorContainer}>
				{thumbnails.map((thumbnail, index) => (
					<li key={index}>
						<button
							onClick={() => setCurrentIndex(index)}
							className={index == currentIndex ? styles.selected : ''}>
							<img src={thumbnail} />
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

const SmallCarousel = ({ className, images }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div
			className={`${styles.mainContainer} ${styles.carouselSmall} ${className}`}
			style={{ '--index': currentIndex }}>
			{images.map((img, index) => (
				<img key={index} src={img} />
			))}

			<button
				className={`${styles.prevButton} ${styles.controls}`}
				onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
				disabled={currentIndex == 0}>
				<img src={IconPrev} className={styles.icon} />
			</button>

			<button
				className={`${styles.nextButton} ${styles.controls}`}
				onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
				disabled={currentIndex == images.length - 1}>
				<img src={IconNext} className={styles.icon} />
			</button>
		</div>
	)
}

const Carousel = ({
	className,
	type = 'large',
	assetsBaseUrl,
	images: { originals, thumbnails },
}) => {
	originals = originals.map((path) => assetsBaseUrl + path)
	thumbnails = thumbnails.map((path) => assetsBaseUrl + path)

	return type == 'large' ? (
		<LargeCarousel
			className={className}
			images={originals}
			thumbnails={thumbnails}
		/>
	) : (
		<SmallCarousel className={className} images={originals} />
	)
}

export default Carousel
