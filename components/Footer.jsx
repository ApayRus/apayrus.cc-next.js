import styles from './Footer.module.css'

const Footer = props => {
	const { socialMedia = {} } = props
	const { links = [] } = socialMedia

	return (
		<footer className={styles.root}>
			{links.map(elem => {
				const { href, text } = elem
				return (
					<div key={text} className={styles.link}>
						<a href={href}>{text}</a>
					</div>
				)
			})}
		</footer>
	)
}

export default Footer
