import styles from './ImagesSlider.module.css'

const ImagesSlider = props => {
	const { images = [] } = props

	return (
		<div className={styles.root}>
			<div className={styles.imagesContainer}>
				{images.map(image => {
					const { text, href } = image
					return (
						<div
							className={styles.imageContainer}
							style={{ display: 'flex', flexDirection: 'column' }}
							key={text}
						>
							<img className={styles.image} src={href} alt={text} />
							<div className={styles.imageCaption}>{text}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ImagesSlider
