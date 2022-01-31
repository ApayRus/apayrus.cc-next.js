import styles from './ProjectContentTypesTable.module.css'

// with counts
const ContentTypesTable = props => {
	const { types } = props
	return (
		<div className={styles.types}>
			{Object.keys(types).map(type => {
				const { length: count } = types[type]

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

export default ContentTypesTable
