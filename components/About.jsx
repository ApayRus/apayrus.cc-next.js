import styles from './About.module.css'

const About = props => {
	const { title, description, videos } = props
	const [firstVideo] = videos

	return (
		<section className={styles.root}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.content}>
				<div className={styles.video}>
					<iframe
						width='160'
						height='160'
						src={firstVideo.href}
						// title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
				<div
					className={styles.text}
					dangerouslySetInnerHTML={{
						__html: description
					}}
				></div>
			</div>
		</section>
	)
}

export default About
