import Link from 'next/link'
import styles from './ProjectCard.module.css'

const ProjectCard = props => {
	const {
		title,
		description,
		categories,
		filePath,
		tags,
		...contentTypes
	} = props

	const projectPath = filePath
		.split('/')
		.slice(-2)
		.join('/')
		.replace(/.md$/, '') //route

	const { images } = contentTypes

	const [image] = images

	const ContentTypes = props => {
		const { types } = props
		return (
			<div className={styles.types}>
				{Object.keys(types).map(type => {
					const { length: count } = contentTypes[type]

					return (
						<div key={type} className={styles.typeContainer}>
							<div className={styles.type}>{type}</div>
							<div className={styles.count}>{count}</div>
						</div>
					)
				})}
			</div>
		)
	}

	return (
		<section className={styles.root}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.tags}>
				{tags.map(tag => (
					<div key={tag} className={styles.tag}>
						{tag}
					</div>
				))}
			</div>
			<div className={styles.content}>
				<div className={styles.imageContainer}>
					<img src={image.href} alt={image.text} className={styles.image} />
				</div>
				<ContentTypes types={contentTypes} />
				<div className={styles.description}>
					<div dangerouslySetInnerHTML={{ __html: description }} />

					<div className={styles.readMore}>
						<Link href={`/${projectPath}`}>Read more</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectCard
