const About = props => {
	const { title, description } = props
	return (
		<div>
			<h1 dangerouslySetInnerHTML={{ __html: title }} />
			<div
				dangerouslySetInnerHTML={{
					__html: description
				}}
			></div>
		</div>
	)
}

export default About
