import Link from 'next/link'
import theme from '../styles/theme'
import LangSwitcher from './LangSwitcher'

const Heading = props => {
	const { title, tags } = props
	return (
		<header style={styles.heading}>
			<div style={styles.titleLogoContainer}>
				<Link href='/'>
					<img style={styles.logo} src='/logo.png' alt='apayrus.cc logo' />
				</Link>
				<div style={styles.titleContainer}>
					<h1 style={styles.title}>{title}</h1>
					<div style={styles.tags}>
						{tags.map(tag => (
							<div style={styles.tag} key={tag}>
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
			<div style={styles.langSwitcher}>
				<LangSwitcher />
			</div>
		</header>
	)
}

const styles = {
	heading: { padding: '5px' },
	titleLogoContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	titleContainer: {
		display: 'inline-block',
		marginLeft: '10px'
	},
	title: { margin: 0, color: theme.color1 },
	logo: { width: '35%', maxWidth: '70px', cursor: 'pointer' },
	langSwitcher: {
		position: 'absolute',
		top: 10,
		right: 10
	},
	tags: { marginLeft: '4px', color: 'grey' },
	tag: { display: 'inline-block' }
}

export default Heading
