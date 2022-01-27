const Title = props => {
	const { title, tags } = props
	return (
		<div>
			<h1>{title}</h1>
			<ul>
				{tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		</div>
	)
}

export default Title
