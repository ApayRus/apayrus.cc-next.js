import Link from 'next/link'
import ContentTypesTable from './ProjectContentTypesTable'
import ProjectContent from './ProjectContent'
import styles from './ProjectCard.module.css'
import img from 'next/image'

const ProjectCard = props => {
	const {
		title,
		description,
		categories,
		filePath,
		tags,
		pageMode = false, // cardMode
		/*
		cardMode: h2, read more button 
		pageMode: h1, full content
		*/
		...contentTypes
	} = props

	const projectPath = filePath
		.split('/')
		.slice(-2)
		.join('/')
		.replace(/.md$/, '') //route

	const { images } = contentTypes

	const [image] = images

	const titleComponent = pageMode ? (
		<Link href={`/${projectPath}`}>
			<a>
				<h1 className={styles.title}>{title}</h1>
			</a>
		</Link>
	) : (
		<Link href={`/${projectPath}`}>
			<a>
				<h2 className={styles.title}>{title}</h2>
			</a>
		</Link>
	)

	return (
		<section className={styles.root}>
			{titleComponent}
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
				<ContentTypesTable types={contentTypes} />
				<div className={styles.description}>
					<div dangerouslySetInnerHTML={{ __html: description }} />
				</div>
				{!pageMode && (
					<div className={styles.readMore}>
						<Link href={`/${projectPath}`}>Read more</Link>
					</div>
				)}
			</div>
			{pageMode && <ProjectContent types={contentTypes} />}
		</section>
	)
}

export default ProjectCard
