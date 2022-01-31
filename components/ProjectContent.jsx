import styles from './ProjectContent.module.css'

// with counts
const ProjectContent = props => {
	const { types } = props
	return (
		<div className={styles.types}>
			{Object.keys(types).map(typeName => {
				const typeArray = types[typeName]
				const { length } = typeArray

				return (
					length > 0 && (
						<div key={typeName} className={styles.projectContent}>
							<h2 className={styles.typeTitle}>{typeName}</h2>
							{typeArray.map(elem => {
								const { text, href, type /* image or link */ } = elem
								return (
									<a
										key={text}
										href={href}
										target='_blank'
										rel='noreferrer'
										className={styles.link}
									>
										<h3>{text}</h3>
									</a>
								)
							})}
						</div>
					)
				)
			})}
		</div>
	)
}

export default ProjectContent
