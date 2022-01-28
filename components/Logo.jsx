import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/'>
			<img style={styles.logo} src='/logo.png' alt='apayrus.cc logo' />
		</Link>
	)
}

const styles = {
	logo: {
		// height: '100px',
		width: '100%',
		maxWidth: '70px',
		cursor: 'pointer'
	}
}

export default Logo
