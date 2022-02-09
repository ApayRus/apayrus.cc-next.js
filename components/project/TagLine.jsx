import styles from './Tagline.module.css'

const TagLine = props => {
	const { stackTags, topicTags } = props
	return (
		<div className={styles.tagline}>
			<div className={styles.stackTags}>
				{stackTags.map(tag => (
					<div key={tag} className={styles.tag}>
						{tag}
					</div>
				))}
			</div>
			<div className={styles.topicTags}>
				{topicTags.map(tag => (
					<div key={tag} className={styles.tag}>
						{tag}
					</div>
				))}
			</div>
		</div>
	)
}

export default TagLine
