const Footer = props => {
	const { socialMedia } = props
	return (
		<footer>
			<pre>{JSON.stringify(socialMedia, null, 2)}</pre>
		</footer>
	)
}

export default Footer
