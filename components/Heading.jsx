import Logo from './Logo'
import Title from './Title'
import LangSwitcher from './LangSwitcher'

const Heading = props => {
	const { title, tags } = props
	return (
		<header style={styles.root}>
			<div style={styles.logo}>
				<Logo />
			</div>
			<div style={styles.title}>
				<Title title={title} tags={tags} />
			</div>
			<div style={styles.langSwitcher}>
				<LangSwitcher />
			</div>
		</header>
	)
}

const styles = {
	root: {
		display: 'flex'
	},
	logo: {
		flex: 1
	},
	title: {
		flex: 3
	},
	langSwitcher: {
		flex: 1
	}
}

export default Heading
