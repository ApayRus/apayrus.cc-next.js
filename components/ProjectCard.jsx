import Link from 'next/link'

const ProjectCard = props => {
	const {
		title,
		images,
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

	console.log('projectPath')
	console.log(projectPath)

	const [image] = images
	return (
		<section>
			<h2>{title}</h2>
			<div style={styles.tags}>
				{tags.map(tag => (
					<div key={tag} style={styles.tag}>
						{tag}
					</div>
				))}
			</div>
			<div style={styles.root}>
				<div style={styles.image}>
					<img src={image.href} alt={image.text} style={{ width: '100%' }} />
				</div>
				<div style={styles.description}>
					<div dangerouslySetInnerHTML={{ __html: description }} />
					<div style={styles.readMore}>
						<Link href={`/${projectPath}`}>Read more</Link>
					</div>
				</div>
				<div style={styles.types}>
					{Object.keys(contentTypes).map(type => {
						return (
							<div key={type}>
								{type} ({contentTypes[type].length})
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

const styles = {
	root: { display: 'flex', flexWrap: 'wrap' },
	image: { flex: 1 },
	description: { flex: 1 },
	types: { flex: 1 },
	tags: { display: 'flex', flexWrap: 'wrap' },
	tag: {
		padding: '2px',
		paddingLeft: '4px',
		paddingRight: '4px',
		marginRight: '4px',
		marginTop: '4px',
		borderRadius: '5px',
		border: '1px solid gray',
		color: 'gray',
		fontSize: '80%'
	},
	readMore: {
		padding: '4px 8px',
		color: 'white',
		backgroundColor: 'skyblue',
		borderRadius: '5px',
		display: 'inline-block',
		'&:hover': {
			backgroundColor: 'blue',
			cursor: 'pointer'
		}
	}
}

export default ProjectCard
