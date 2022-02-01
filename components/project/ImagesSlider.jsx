import styles from './ImagesSlider.module.css'

const ImagesSlider = props => {
	const { images = [] } = props

	return (
		<div className={styles.root}>
			<div className={styles.box}>
				{images.map(image => {
					const { text, href } = image
					return <img key={text} className={styles.image} src={href} alt={text} />
				})}
			</div>
		</div>
	)
}

export default ImagesSlider
